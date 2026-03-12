export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#071d1d",
        color: "#f4ecd9",
        fontFamily: "Segoe UI, Arial, sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div>
        <img
          src="/logo.png"
          alt="SSA logo"
          width="64"
          height="64"
          style={{ borderRadius: 12, marginBottom: 16 }}
        />
        <h1 style={{ margin: 0, fontSize: 26 }}>Redirecting to SaudiTritons.org</h1>
        <p style={{ marginTop: 10, opacity: 0.8 }}>If you are not redirected, use the link below.</p>
        <a href="https://sauditritons.org" style={{ color: "#d7a845", fontWeight: 700 }}>
          Go to SaudiTritons.org
        </a>
      </div>
    </main>
  );
}
