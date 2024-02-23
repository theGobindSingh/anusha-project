export default ({ env }) => ({
  "users-permissions": {
    config: {
      enabled: true,
    },
  },
  email: {
    config: {
      enabled: true,
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_TOKEN"), // Required
      },
      settings: {
        defaultFrom: "sing@hymnsofweb.com",
        defaultReplyTo: "sing@hymnsofweb.com",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
