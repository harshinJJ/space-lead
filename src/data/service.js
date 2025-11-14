const SERVICE = {
  INVOICE: "/microsite/v1/invoice-amount-history",
  CONTENT: {
    AGENDA: "/api/agendas",
    SPEAKERS: "/api/speakers",
    SESSION_SPEAKERS: "/microsite/v2/session-type-speaker-list",
    BOOTHS: "/microsite/v2/event-booths",
    EXHIBITORS: "/api/exhibitors",
    SPONSORS: "/api/sponsorships",
    SPONSOR_CATEGORIES: "/microsite/v2/event-sponsor-categories",
    COMMITEE: "/microsite/v2/committee",
    EVENT_COMMITEE: "/api/committees",
    LIVE_UPDATES: "/api/press-releases",
    MEDIA: "/api/medias",
  },
  CONTACT: {
    SUBMIT: "/api/mail-send",
  },
  REGISTER: {
    PASS: "/microsite/v2/event-tickets",
    SUBMIT: "/microsite/v2/form-registration",
    STATUS: "/microsite/v2/event-register-user",
  },
};

export default SERVICE;
