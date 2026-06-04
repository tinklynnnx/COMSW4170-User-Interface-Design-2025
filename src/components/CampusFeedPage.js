import React, { useRef, useState, useEffect, useMemo } from "react";
import applePicking from "../images/apple_picking.jpg";
import auditions from "../images/auditions.jpg";
import minecraft from "../images/minecraft.jpg";
import robotics from "../images/robotics.jpg";
import pumpkinPainting from "../images/pumpkin_painting.jpg";
import globalCafe from "../images/global_cafe.jpg";

import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query, limit } from "firebase/firestore";

const staticEvents = [
  { id: "static-apple", imageUrl: applePicking, title: "Apple Picking" },
  { id: "static-auditions", imageUrl: auditions, title: "Auditions" },
  { id: "static-minecraft", imageUrl: minecraft, title: "Minecraft" },
  { id: "static-robotics", imageUrl: robotics, title: "Robotics" },
  { id: "static-pumpkin", imageUrl: pumpkinPainting, title: "Pumpkin Painting" },
  { id: "static-cafe", imageUrl: globalCafe, title: "Global Cafe" },
];

export default function CampusFeedPage({ onGoToPost, setCurrentScreen }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc"),
      limit(20)
    );

    const unsub = onSnapshot(q, (snap) => {
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  const [dt, setDt] = useState(() => new Date());
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const dateStr = dt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const timeStr = dt.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  const cardsToShow = useMemo(() => {
    const fromFirestore = events.map((e) => ({
      id: `fs-${e.id}`,
      title: e.title || "Uploaded Event",
      desc: e.desc || "",
      imageUrl: e.imageUrl || "",
    }));

    return [...fromFirestore, ...staticEvents].slice(0, 12);
  }, [events]);

  return (
    <div style={styles.content}>
      <h1 style={styles.title}>
        WHAT'S GOING
        <br />
        ON CAMPUS...
      </h1>

      <div style={styles.pillsRow}>
        <button
          type="button"
          style={styles.pillBtn}
          onClick={() => (dateRef.current?.showPicker ? dateRef.current.showPicker() : dateRef.current?.click())}
        >
          {dateStr}
        </button>

        <button
          type="button"
          style={styles.pillBtn}
          onClick={() => (timeRef.current?.showPicker ? timeRef.current.showPicker() : timeRef.current?.click())}
        >
          {timeStr}
        </button>

        <input
          ref={dateRef}
          type="date"
          style={styles.hiddenPicker}
          onChange={(e) => {
            const [y, m, d] = e.target.value.split("-").map(Number);
            const next = new Date(dt);
            next.setFullYear(y, m - 1, d);
            setDt(next);
          }}
        />

        <input
          ref={timeRef}
          type="time"
          style={styles.hiddenPicker}
          onChange={(e) => {
            const [hh, mm] = e.target.value.split(":").map(Number);
            const next = new Date(dt);
            next.setHours(hh, mm, 0, 0);
            setDt(next);
          }}
        />
      </div>

      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      <div className="hide-scrollbar" style={styles.gridScroll}>
        <div style={styles.grid}>
          {cardsToShow.map((ev) => (
            <div key={ev.id} style={styles.cardBtn}>
              {ev.imageUrl ? (
                <img
                  src={ev.imageUrl}
                  alt={ev.title || "Event"}
                  style={styles.cardImage}
                />
              ) : (
                <div style={styles.titleCard}>
                  <div style={styles.titleCardText}>{ev.title}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {onGoToPost && (
        <button
          type="button"
          onClick={onGoToPost}
          style={styles.fab}
          aria-label="Create a post"
        >
          +
        </button>
      )}
    </div>
  );
}

const styles = {
  content: {
    flex: 1,
    padding: "6px 18px 50px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  gridScroll: {
    flex: 1,
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },

  title: {
    fontFamily: '"Rubik One", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    margin: "24px 0 14px",
    fontSize: 39,
    textAlign: "center",
    width: "100%",
    lineHeight: 1.02,
    letterSpacing: 0.5,
    fontWeight: 900,
    textTransform: "uppercase",
  },

  pillsRow: {
    display: "flex",
    gap: 10,
    marginBottom: 25,
    marginTop: 24,
    justifyContent: "center",
  },

  cardBtn: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: 16,
    overflow: "hidden",
    border: "none",
    padding: 0,
    background: "#f2f2f2",
    boxShadow: "0 8px 16px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(0,0,0,0.06)",
    cursor: "pointer",
  },

  cardImage: { width: "100%", height: "100%", objectFit: "cover", display: "block" },

  fab: {
    position: "absolute",
    right: 18,
    bottom: 94,
    width: 54,
    height: 54,
    borderRadius: 18,
    border: "none",
    background: "#3D86F6",
    color: "#fff",
    fontSize: 36,
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
  },

  titleCard: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    padding: 12,
    textAlign: "center",
    background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.10))",
  },

  titleCardText: {
    fontSize: 16,
    fontWeight: 900,
    lineHeight: 1.1,
  },

  pillBtn: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "#efefef",
    color: "#111",
    fontSize: 18,
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
  },

  hiddenPicker: {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: 1,
    height: 1,
  },
};
