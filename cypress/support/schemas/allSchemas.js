const registerSchema = {
    type: "object",
    required: ["id", "token"],
    properties: {
      id: { type: "integer" },
      token: { type: "string" }
    },
    additionalProperties: false
  };
  
  const userSchema = {
    type: "object",
    required: ["page", "per_page", "total", "total_pages", "data", "support"],
    properties: {
      page: { type: "integer" },
      per_page: { type: "integer" },
      total: { type: "integer" },
      total_pages: { type: "integer" },
      data: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          required: ["id", "email", "first_name", "last_name", "avatar"],
          properties: {
            id: { type: "integer" },
            email: { type: "string" },
            first_name: { type: "string" },
            last_name: { type: "string" },
            avatar: { type: "string" }
          },
          additionalProperties: false
        }
      },
      support: {
        type: "object",
        required: ["url", "text"],
        properties: {
          url: { type: "string" },
          text: { type: "string" }
        },
        additionalProperties: false
      }
    },
    additionalProperties: false
  };
  
  const userUpdateSchema = {
    type: "object",
    required: ["updatedAt"],
    properties: {
      updatedAt: { type: "string" }
    },
    additionalProperties: false
  };


  export { registerSchema, userSchema, userUpdateSchema };
  