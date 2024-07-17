import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "c324a4de-e3ee-4a91-acb3-05e0d848df46",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "c324a4de-e3ee-4a91-acb3-05e0d848df46",
        webhookId: "e73a7e76-f99f-421a-b40e-db31c0343213",
        containerWidth: "100%25",
        layoutWidth: "100%25",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
