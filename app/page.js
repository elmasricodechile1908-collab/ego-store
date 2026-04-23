export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#05070d",
      color: "white",
      fontFamily: "sans-serif",
      padding: "40px"
    }}>
      <h1 style={{ color: "#9b5cff" }}>
        EGO STORE
      </h1>

      <p>
        Catálogo activo — transferencia bancaria Chile disponible
      </p>

      <ul>
        <li>Netflix Premium — $7000</li>
        <li>Disney+ Premium — $7000</li>
        <li>Crunchyroll Mega Fan — $6500</li>
        <li>Spotify Familiar — $7000</li>
        <li>Prime Video — $7000</li>
        <li>HBO Max — $4000</li>
        <li>Paramount+ — $7000</li>
        <li>Gemini Pro — $10000</li>
        <li>CapCut Pro — $10000</li>
        <li>Duolingo Premium — $6500</li>
      </ul>

      <p style={{ marginTop: "20px" }}>
        Enviar comprobante a Discord para entrega automática.
      </p>
    </main>
  )
}
