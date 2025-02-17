"use client";

import Modal from "@/components/modal/modal";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "TAT Update",
    description: "This is card 1",
    image: "/TAT.svg",
  },
  { id: 2, title: "Pin Cluster Map", description: "This is card 2" },
  { id: 3, title: "Serviceability", description: "This is card 3" },
  { id: 4, title: "Lat Long Update", description: "This is card 4" },
  { id: 5, title: "Holiday Update", description: "This is card 5" },
];

export default function ClickableCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (card) => {
    setModalContent(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="flex justify-center flex-col gap-9 items-center h-full">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cards.slice(0, 3).map((card) => (
          <motion.div
            key={card.id}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center"
            onClick={() => handleCardClick(card)}
          >
            <Card
              sx={{
                width: 250,
                height: 250,
                textAlign: "center",
                // boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
              className="hover:shadow-lg hover:shadow-blue-400"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardActionArea style={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant="h6">{card.title}</Typography>
                  </CardContent>
                </CardActionArea>

                <div
                  className="flex items-center justify-center flex-1"
                  style={{ flex: 3 }}
                >
                  <Image src={card.image} alt="TAT" width={120} height={120} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cards.slice(3).map((card) => (
          <motion.div
            key={card.id}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center"
            onClick={() => handleCardClick(card)}
          >
            <Card
              sx={{
                width: 250,
                height: 250,
                textAlign: "center",
                // boxShadow: 3,
              }}
              className="hover:shadow-lg hover:shadow-blue-400"
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalContent && (
          <div>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            {/* You can add more content here based on the card data */}
          </div>
        )}
      </Modal>
    </div>
  );
}
