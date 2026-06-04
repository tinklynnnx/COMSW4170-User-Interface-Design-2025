import React, { useRef, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function PostEventPage({ onGoToEvents }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const fileRef = useRef(null);

  const pickImage = () => fileRef.current?.click();

  const onFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImgUrl(url);
  };

  const onPost = async () => {
    if (!title.trim()) return alert("Please enter an event title.");

    await addDoc(collection(db, "events"), {
      title: title.trim(),
      desc: desc.trim(),
      createdAt: serverTimestamp(),
    });

    console.log("Saved! Navigating now...");
    onGoToEvents();
  };

  return (
    <div style={styles.content}>
      <div style={styles.topRow}>
        <button
          type="button"
          style={styles.backBtn}
          aria-label="Back"
          onClick={onGoToEvents}
        >
          ←
        </button>
        <div style={styles.header}>
          <span style={styles.party}>🎉</span>
          <span style={styles.headerText}>POST EVENT</span>
        </div>
        <div style={{ width: 36 }} />
      </div>

      <div style={styles.stepRow}>
        <StepCircle n={1} style={styles.stepCircle1} />
        <div style={styles.stepBody}>
          <div style={styles.bigTitleWrap}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Insert Event Title"
              style={styles.bigTitleInput}
            />
            <div style={styles.underline} />
          </div>
        </div>
      </div>

      <div style={{ ...styles.stepRow, ...styles.stepRow2 }}>
        <StepCircle n={2} />
        <div style={styles.stepBody}>
          <div style={styles.label}>Upload Event Thumbnail</div>

          <button
            type="button"
            onClick={pickImage}
            style={styles.uploadBox}
            aria-label="Upload event image"
          >
            {imgUrl ? (
              <img src={imgUrl} alt="Event" style={styles.uploadImg} />
            ) : (
              <div style={styles.uploadPlaceholder}>
                <div style={styles.photoIconBox}>📷</div>
              </div>
            )}
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => onFile(e.target.files?.[0])}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div style={styles.stepRow}>
        <StepCircle n={3} />
        <div style={styles.stepBody}>
          <div style={styles.label}>Insert Event Description</div>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={styles.descBox}
          />
        </div>
      </div>

      <div style={styles.postRow}>
        <button type="button" onClick={onPost} style={styles.postBtn}>
          POST
        </button>
      </div>
    </div>
  );
}

function StepCircle({ n, style }) {
  return <div style={{ ...styles.stepCircle, ...style }}>{n}</div>;
}

const styles = {
  content: {
    flex: 1,
    padding: "8px 18px 90px",
    position: "relative",
    overflowY: "auto",
  },

  topRow: {
    display: "grid",
    gridTemplateColumns: "36px 1fr 36px",
    alignItems: "center",
    marginBottom: 16,
  },

  backBtn: {
    border: "none",
    background: "transparent",
    fontSize: 28,
    cursor: "pointer",
    color: "#222",
    lineHeight: 1,
  },

  header: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  party: { fontSize: 28, marginTop: 20 },

  headerText: {
    fontSize: 35,
    fontWeight: 700,
    letterSpacing: 0.6,
    color: "#6CACE4",
    textTransform: "uppercase",
    marginTop: 24,
  },

  stepRow: {
    display: "grid",
    gridTemplateColumns: "38px auto",
    columnGap: 12,
    alignItems: "start",
    justifyContent: "center",
    marginTop: 16,
  },

  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 999,
    background: "#6CACE4",
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    display: "grid",
    placeItems: "center",
    marginTop: 33,
  },

  stepBody: { paddingRight: 4 },

  bigTitleWrap: { marginTop: 20 },

  bigTitleInput: {
    width: "100%",
    textAlign: "center",
    border: "none",
    outline: "none",
    fontSize: 44,
    fontWeight: 900,
    color: "#000000ff",
  },

  underline: {
    height: 3,
    width: "90%",
    background: "#6CACE4",
    margin: "2px auto 0",
    borderRadius: 999,
  },

  label: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 12,
    marginTop: 30,
    textAlign: "center",
  },

  uploadBox: {
    width: "100%",
    maxWidth: 280,
    height: 200,
    border: "2px solid rgba(0,0,0,0.25)",
    borderRadius: 8,
    background: "#fff",
    padding: 0,
    cursor: "pointer",
    overflow: "hidden",
    margin: "0 auto",
    display: "block",
  },

  uploadImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },

  uploadPlaceholder: {
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
  },

  photoIconBox: {
    width: 56,
    height: 56,
    display: "grid",
    placeItems: "center",
    color: "#999",
    fontSize: 42,
  },

  descBox: {
    width: "100%",
    maxWidth: 310,
    height: 180,
    border: "2px solid rgba(0,0,0,0.25)",
    borderRadius: 8,
    resize: "none",
    fontSize: 14,
    padding: 10,
    outline: "none",
    margin: "0 auto",
    display: "block",
  },
  
  postRow: {
    display: "grid",
    placeItems: "center",
    marginTop: 78,
  },

  postBtn: {
    width: 200,
    height: 50,
    borderRadius: 12,
    border: "none",
    background: "#3D86F6",
    color: "#fff",
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 0.5,
    cursor: "pointer",
  },

  stepCircle1: {
    marginTop: 30,
  },

  stepRow2: {
    marginTop: 20,
  },
};
