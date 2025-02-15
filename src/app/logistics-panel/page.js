"use client";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Card 1", description: "This is card 1" },
  { id: 2, title: "Card 2", description: "This is card 2" },
  { id: 3, title: "Card 3", description: "This is card 3" },
  { id: 4, title: "Card 4", description: "This is card 4" },
  { id: 5, title: "Card 5", description: "This is card 5" },
];

export default function ClickableCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {cards.slice(0, 3).map((card) => (
        <motion.div key={card.id} whileTap={{ scale: 0.9 }}>
          <Card
            sx={{ width: 250, height: 250, textAlign: "center", boxShadow: 3 }}
          >
            <CardActionArea onClick={() => alert(`${card.title} clicked!`)}>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gridColumn: "span 3",
        }}
      >
        {cards.slice(3).map((card) => (
          <motion.div
            key={card.id}
            whileTap={{ scale: 0.9 }}
            style={{ margin: "0 10px" }}
          >
            <Card
              sx={{
                width: 250,
                height: 250,
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <CardActionArea onClick={() => alert(`${card.title} clicked!`)}>
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
    </div>
  );
}
