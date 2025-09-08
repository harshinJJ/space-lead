"use client";
import heic2any from "heic2any";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
// import "./Filecroper.css";
import Modal from "../common/Modal";
import FadeLoader from "../loader/FadeLoader";
import PrimaryButton from "../buttons/PrimaryButton";

const FileUplodCroper = ({ onCropDone, defaultImage }) => {
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const [showCropper, setShowCropper] = useState(false);
  const [cropArea, setCropArea] = useState({
    x: 50,
    y: 50,
    width: 80,
    height: 150,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState("");
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialCropArea, setInitialCropArea] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (showCropper) {
      document?.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document?.body.style.removeProperty("overflow");
    }
    return () => {
      document?.body.style.removeProperty("overflow");
    };
  }, [showCropper]);

  useEffect(() => {
    if (defaultImage) {
      setCroppedImage(null);
    }
  }, [defaultImage]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (file.size > maxSize) {
      toast.error("File size must be under 5 MB.");
      return;
    }

    if (file.type === "image/heic" || file.name.endsWith(".heic")) {
      setLoading(true);
      heic2any({ blob: file, toType: "image/jpeg", quality: 0.8 })
        .then((convertedBlob) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            setUploadedImage(e.target.result);
            setShowCropper(true);
          };
          reader.readAsDataURL(convertedBlob);
        })
        .catch((err) => {
          toast.error("Failed to convert HEIC image.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
      setLoading(false);
    } else {
      toast.error("Please select a valid image file.");
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();

    const { x, y } = getClientCoordinates(e);
    const rect = e.currentTarget.parentElement.getBoundingClientRect();

    setIsDragging(true);
    setDragStart({
      x: x - rect.left - cropArea.x,
      y: y - rect.top - cropArea.y,
    });
  };

  const handleResizeStart = (e, handle) => {
    e.preventDefault();
    e.stopPropagation();

    const { x, y } = getClientCoordinates(e);
    const rect =
      e.currentTarget.parentElement.parentElement.getBoundingClientRect();

    setIsResizing(true);
    setResizeHandle(handle);
    setInitialCropArea({ ...cropArea });

    setDragStart({
      x: x - rect.left,
      y: y - rect.top,
    });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();

    const { x, y } = getClientCoordinates(e);

    const rect = e.currentTarget.getBoundingClientRect();
    const imageElement = imageRef.current;

    if (!isDragging && !isResizing) return;

    if (imageElement) {
      const imageRect = imageElement.getBoundingClientRect();
      const containerRect = e.currentTarget.getBoundingClientRect();

      if (isDragging) {
        const relativeX = x - containerRect.left;
        const relativeY = y - containerRect.top;

        const newX = Math.max(
          0,
          Math.min(relativeX - dragStart.x, imageRect.width - cropArea.width)
        );
        const newY = Math.max(
          0,
          Math.min(relativeY - dragStart.y, imageRect.height - cropArea.height)
        );

        setCropArea((prev) => ({
          ...prev,
          x: newX,
          y: newY,
        }));
      } else if (isResizing) {
        const currentX = x - containerRect.left;
        const currentY = y - containerRect.top;
        const deltaX = currentX - dragStart.x;
        const deltaY = currentY - dragStart.y;

        let newCropArea = { ...initialCropArea };
        const minSize = 50;

        switch (resizeHandle) {
          case "nw":
            newCropArea.x = Math.max(0, initialCropArea.x + deltaX);
            newCropArea.y = Math.max(0, initialCropArea.y + deltaY);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width - deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height - deltaY
            );
            break;
          case "ne":
            newCropArea.y = Math.max(0, initialCropArea.y + deltaY);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width + deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height - deltaY
            );
            break;
          case "sw":
            newCropArea.x = Math.max(0, initialCropArea.x + deltaX);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width - deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height + deltaY
            );
            break;
          case "se":
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width + deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height + deltaY
            );
            break;
          case "n":
            newCropArea.y = Math.max(0, initialCropArea.y + deltaY);
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height - deltaY
            );
            break;
          case "s":
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height + deltaY
            );
            break;
          case "w":
            newCropArea.x = Math.max(0, initialCropArea.x + deltaX);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width - deltaX
            );
            break;
          case "e":
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width + deltaX
            );
            break;
        }

        if (newCropArea.x + newCropArea.width > imageRect.width) {
          newCropArea.width = imageRect.width - newCropArea.x;
        }
        if (newCropArea.y + newCropArea.height > imageRect.height) {
          newCropArea.height = imageRect.height - newCropArea.y;
        }

        setCropArea(newCropArea);
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging && !isResizing) return;

    e.preventDefault();

    const { x, y } = getClientCoordinates(e);
    const rect = e.currentTarget.getBoundingClientRect();
    const imageElement = imageRef.current;

    if (imageElement) {
      const imageRect = imageElement.getBoundingClientRect();
      const containerRect = e.currentTarget.getBoundingClientRect();

      if (isDragging) {
        const relativeX = x - containerRect.left;
        const relativeY = y - containerRect.top;

        const newX = Math.max(
          0,
          Math.min(relativeX - dragStart.x, imageRect.width - cropArea.width)
        );
        const newY = Math.max(
          0,
          Math.min(relativeY - dragStart.y, imageRect.height - cropArea.height)
        );

        setCropArea((prev) => ({
          ...prev,
          x: newX,
          y: newY,
        }));
      } else if (isResizing) {
        const currentX = x - containerRect.left;
        const currentY = y - containerRect.top;
        const deltaX = currentX - dragStart.x;
        const deltaY = currentY - dragStart.y;

        let newCropArea = { ...initialCropArea };
        const minSize = 50;

        switch (resizeHandle) {
          case "nw":
            newCropArea.x = Math.max(0, initialCropArea.x + deltaX);
            newCropArea.y = Math.max(0, initialCropArea.y + deltaY);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width - deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height - deltaY
            );
            break;
          case "ne":
            newCropArea.y = Math.max(0, initialCropArea.y + deltaY);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width + deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height - deltaY
            );
            break;
          case "sw":
            newCropArea.x = Math.max(0, initialCropArea.x + deltaX);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width - deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height + deltaY
            );
            break;
          case "se":
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width + deltaX
            );
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height + deltaY
            );
            break;
          case "n":
            newCropArea.y = Math.max(0, initialCropArea.y + deltaY);
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height - deltaY
            );
            break;
          case "s":
            newCropArea.height = Math.max(
              minSize,
              initialCropArea.height + deltaY
            );
            break;
          case "w":
            newCropArea.x = Math.max(0, initialCropArea.x + deltaX);
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width - deltaX
            );
            break;
          case "e":
            newCropArea.width = Math.max(
              minSize,
              initialCropArea.width + deltaX
            );
            break;
        }

        // Clamp within image
        if (newCropArea.x + newCropArea.width > imageRect.width) {
          newCropArea.width = imageRect.width - newCropArea.x;
        }
        if (newCropArea.y + newCropArea.height > imageRect.height) {
          newCropArea.height = imageRect.height - newCropArea.y;
        }

        setCropArea(newCropArea);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle("");
  };

  function getClientCoordinates(e) {
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    } else {
      return {
        x: e.clientX,
        y: e.clientY,
      };
    }
  }

  const removeFile = (e) => {
    e.preventDefault();
    onCropDone(null);
    fileInputRef.current.value = "";
    setCroppedImage(null);
    setUploadedImage(null);
  };

  function dataURLtoFile(dataUrl, filename) {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const cropImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      // Calculate dimensions to maintain aspect ratio
      const outputWidth = 800; // or your desired size
      const outputHeight = (cropArea.height / cropArea.width) * outputWidth;

      canvas.width = outputWidth;
      canvas.height = outputHeight;

      const imageElement = imageRef.current;
      const imageRect = imageElement.getBoundingClientRect();

      const scaleX = img.naturalWidth / imageRect.width;
      const scaleY = img.naturalHeight / imageRect.height;

      ctx.drawImage(
        img,
        cropArea.x * scaleX,
        cropArea.y * scaleY,
        cropArea.width * scaleX,
        cropArea.height * scaleY,
        0,
        0,
        outputWidth,
        outputHeight
      );

      // Use higher quality for JPEG
      const croppedDataUrl = canvas.toDataURL("image/jpeg", 1);
      setCroppedImage(croppedDataUrl);
      closeCropModal();
      const croppedFile = dataURLtoFile(croppedDataUrl, `${Date.now()}.jpg`);
      onCropDone(croppedFile);
    };

    img.src = uploadedImage;
  };

  const changeImage = () => {
    setCroppedImage(null);
    fileInputRef.current.value = "";
    fileInputRef.current?.click();
  };

  const closeCropModal = () => {
    setShowCropper(false);
    setUploadedImage(null);
    fileInputRef.current.value = "";
    // setLoading(true);
  };

  return (
    <>
      <label htmlFor="file-input" className="relative block">
        <input
          id="file-input"
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="absolute h-full w-full opacity-0"
        />

        {!defaultImage && !croppedImage ? (
          <div
            onClick={changeImage}
            className=" bg-[#F6F6F6] text-xs flex gap-1.5 items-center rounded-xl p-1.75 text-center cursor-pointer transition-transform duration-300"
          >
            <p className=" text-black bg-white rounded-lg py-1.5 px-1">
              Choose File
            </p>
            <small className="text-gray-500">Upload Student ID</small>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={croppedImage ? croppedImage : defaultImage}
                alt="ID Preview"
                className="rounded-xl shadow-sm border-3 border-secondary"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
              <div
                className="absolute top-0 start-100 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={removeFile}
              >
                <span className="badge bg-[#F6F6F6] rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.7929 7.49998L1.14645 1.85353L1.85356 1.14642L7.50001 6.79287L13.1465 1.14642L13.8536 1.85353L8.20711 7.49998L13.8536 13.1464L13.1465 13.8535L7.50001 8.20708L1.85356 13.8535L1.14645 13.1464L6.7929 7.49998Z"
                      fill="#000000"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex-grow">
              <p className="mb-1 font-bold text-black">ID Added Successfully</p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1 rounded-lg border border-secondary text-secondary hover:bg-green-50 cursor-pointer"
              >
                Change Image
              </button>
            </div>
          </div>
        )}
      </label>

      {loading && <FadeLoader w="w-full" h="h-4" className="mb-3" />}

      {showCropper && (
        <Modal
          isOpen={showCropper}
          size="md"
          onClose={() => setShowCropper(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Crop Your Image</h5>
              </div>
              <div className="modal-body text-center">
                <div
                  className="relative inline-block"
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseUp={handleMouseUp}
                  onTouchEnd={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{ userSelect: "none" }}
                >
                  <div className="relative inline-block max-w-full bg-gray-100 border-2 border-gray-300">
                    <img
                      ref={imageRef}
                      src={uploadedImage}
                      alt="Crop preview"
                      onLoad={(e) => {
                        const img = e.target;

                        setImageSize({
                          width: img.naturalWidth,
                          height: img.naturalHeight,
                        });

                        const displayWidth = img.width;
                        const displayHeight = img.height;

                        const defaultCropWidth = Math.min(
                          displayWidth * 0.6,
                          200
                        );
                        const defaultCropHeight = Math.min(
                          displayHeight * 0.6,
                          200
                        );

                        setCropArea({
                          x: Math.max(0, (displayWidth - defaultCropWidth) / 2),
                          y: Math.max(
                            0,
                            (displayHeight - defaultCropHeight) / 2
                          ),
                          width: defaultCropWidth,
                          height: defaultCropHeight,
                        });

                        setInitialCropArea({
                          x: 0,
                          y: 0,
                          width: 0,
                          height: 0,
                        });
                      }}
                      className="max-w-[400px] max-h-[300px] border-2 border-gray-300 block select-none"
                      draggable={false}
                    />

                    {/* Crop overlay */}
                    <div
                      className="absolute border-2 border-secondary bg-secondary/30 box-border"
                      style={{
                        left: `${cropArea.x}px`,
                        top: `${cropArea.y}px`,
                        width: `${cropArea.width}px`,
                        height: `${cropArea.height}px`,
                        cursor: isDragging ? "grabbing" : "grab",
                      }}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleMouseDown}
                    >
                      {/* Corner handles */}
                      {["nw", "ne", "sw", "se"].map((corner) => {
                        const positions = {
                          nw: {
                            top: "-6px",
                            left: "-6px",
                            cursor: "nw-resize",
                          },
                          ne: {
                            top: "-6px",
                            right: "-6px",
                            cursor: "ne-resize",
                          },
                          sw: {
                            bottom: "-6px",
                            left: "-6px",
                            cursor: "sw-resize",
                          },
                          se: {
                            bottom: "-6px",
                            right: "-6px",
                            cursor: "se-resize",
                          },
                        };
                        return (
                          <div
                            key={corner}
                            className="absolute bg-[#F6F6F6] rounded-full border-2 border-white shadow-md"
                            style={{
                              width: "12px",
                              height: "12px",
                              ...positions[corner],
                            }}
                            onMouseDown={(e) => handleResizeStart(e, corner)}
                            onTouchStart={(e) => handleResizeStart(e, corner)}
                          ></div>
                        );
                      })}
                      {/* Edge handles */}
                      {["n", "s", "w", "e"].map((edge) => {
                        const edgeStyles = {
                          n: {
                            top: "-4px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "20px",
                            height: "8px",
                            cursor: "n-resize",
                            border: "1px solid white",
                            borderRadius: "4px",
                          },
                          s: {
                            bottom: "-4px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "20px",
                            height: "8px",
                            cursor: "s-resize",
                            border: "1px solid white",
                            borderRadius: "4px",
                          },
                          w: {
                            left: "-4px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "8px",
                            height: "20px",
                            cursor: "w-resize",
                            border: "1px solid white",
                            borderRadius: "4px",
                          },
                          e: {
                            right: "-4px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "8px",
                            height: "20px",
                            cursor: "e-resize",
                            border: "1px solid white",
                            borderRadius: "4px",
                          },
                        };
                        return (
                          <div
                            key={edge}
                            className="absolute bg-[#F6F6F6]"
                            style={edgeStyles[edge]}
                            onMouseDown={(e) => handleResizeStart(e, edge)}
                            onTouchStart={(e) => handleResizeStart(e, edge)}
                          ></div>
                        );
                      })}

                      {/* Center crosshair */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none">
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white opacity-80 -translate-y-1/2"></div>
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white opacity-80 -translate-x-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-gray-500 text-sm">
                  <strong>Instructions:</strong>
                  <br />• Drag the selection area to move it
                  <br />• Drag the corner circles to resize diagonally
                  <br />• Drag the edge handles to resize in one direction
                </p>
              </div>

              <div className="modal-footer flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeCropModal}
                  className=" px-4 py-2 rounded-lg transition-all text-gray-700 border border-gray-300 bg-white hover:bg-red-600 hover:text-white hover:shadow-[0_4px_12px_rgba(244,67,54,0.4)] duration-500 hover:-translate-y-0.5"
                >
                  Cancel
                </button>
                <PrimaryButton
                  type="button"
                  onClick={cropImage}
                  className="px-4 py-2 rounded-lg"
                >
                  Crop & Save
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default FileUplodCroper;
