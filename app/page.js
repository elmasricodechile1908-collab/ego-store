'use client'

const products = [
  ["Netflix Premium", 7000],
  ["Disney+ Premium", 7000],
  ["Crunchyroll Mega Fan", 6500],
  ["Spotify Familiar", 7000],
  ["Prime Video", 7000],
  ["HBO Max", 4000],
  ["Paramount+", 7000],
  ["Gemini Pro", 10000],
  ["CapCut Pro", 10000],
  ["Duolingo Premium", 6500],
];

export default function Home() {
  const bankInfo = `BancoEstado
CuentaRUT
Juan Pablo Díaz
227636165
juanpimono6@gmail.com`;

  const handleBuy = (name, price) => {
    alert(
      `Producto: ${name}\nPrecio: $${price}\n\nTransferencia bancaria:\n${bankInfo}\n\nLuego envía el comprobante por Discord a dior.dior007`
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(155,92,255,0.15), transparent 30%), #05070d",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        padding: "32px 20px 60px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header
          style={{
            marginBottom: 36,
            padding: "24px",
            borderRadius: 20,
            background: "#0b0f1a",
            border: "1px solid rgba(155,92,255,0.25)",
            boxShadow: "0 10px 30px rgba(155,92,255,0.12)",
          }}
        >
          <h1
            style={{
              color: "#9b5cff",
              fontSize: "clamp(34px, 6vw, 58px)",
              margin: "0 0 8px",
              fontWeight: 800,
            }}
          >
            EGO STORE
          </h1>

          <p
            style={{
              margin: 0,
              color: "#cfcfe6",
              fontSize: 18,
              lineHeight: 1.6,
            }}
          >
            Premium digital subscriptions — transferencia bancaria Chile disponible
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {products.map(([name, price]) => (
            <div
              key={name}
              style={{
                background: "#0b0f1a",
                border: "1px solid rgba(155,92,255,0.25)",
                borderRadius: 18,
                padding: 20,
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  marginBottom: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(155,92,255,0.14)",
                  color: "#d8bbff",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                Premium
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 22,
                  lineHeight: 1.25,
                }}
              >
                {name}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#9b5cff",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                ${price}
              </p>

              <button
                onClick={() => handleBuy(name, price)}
                style={{
                  marginTop: 18,
                  width: "100%",
                  background: "linear-gradient(135deg, #9b5cff, #7b39ff)",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: 10,
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Comprar
              </button>
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: 42,
            background: "#0b0f1a",
            padding: 24,
            borderRadius: 18,
            border: "1px solid rgba(155,92,255,0.25)",
            boxShadow: "0 10px 30px rgba(155,92,255,0.08)",
          }}
        >
          <h2
            style={{
              color: "#9b5cff",
              marginTop: 0,
              fontSize: 28,
            }}
          >
            Transferencia bancaria Chile
          </h2>

          <div
            style={{
              color: "#e7e7f3",
              lineHeight: 1.8,
              fontSize: 16,
            }}
          >
            <div><strong>Banco:</strong> BancoEstado</div>
            <div><strong>Tipo:</strong> CuentaRUT</div>
            <div><strong>Titular:</strong> Juan Pablo Díaz</div>
            <div><strong>Número:</strong> 227636165</div>
            <div><strong>Correo:</strong> juanpimono6@gmail.com</div>
            <div><strong>Discord:</strong> dior.dior007</div>
          </div>

          <a
            href="https://discord.com/users/dior.dior007"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: 18,
              background: "#9b5cff",
              padding: "12px 18px",
              borderRadius: 10,
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Enviar comprobante
          </a>
        </section>
      </div>
    </main>
  );
}
