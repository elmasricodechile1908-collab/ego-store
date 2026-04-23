export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#05070d",
      color: "white",
      fontFamily: "system-ui",
      padding: "40px"
    }}>

      <h1 style={{
        color: "#9b5cff",
        fontSize: "42px",
        marginBottom: "10px"
      }}>
        EGO STORE
      </h1>

      <p style={{
        marginBottom: "40px",
        color: "#ccc"
      }}>
        Premium digital subscriptions — entrega rápida 🚀
      </p>


      {/* PRODUCTS */}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "20px"
      }}>

        {[
          ["Netflix Premium",7000],
          ["Disney+ Premium",7000],
          ["Crunchyroll Mega Fan",6500],
          ["Spotify Familiar",7000],
          ["Prime Video",7000],
          ["HBO Max",4000],
          ["Paramount+",7000],
          ["Gemini Pro",10000],
          ["CapCut Pro",10000],
          ["Duolingo Premium",6500]
        ].map(([name,price])=>(
          
          <div key={name}
          style={{
            background:"#0b0f1a",
            border:"1px solid #9b5cff44",
            borderRadius:"14px",
            padding:"20px"
          }}>
            
            <h3>{name}</h3>

            <p style={{
              color:"#9b5cff",
              fontSize:"20px",
              fontWeight:"bold"
            }}>
              ${price}
            </p>

            <button
            style={{
              marginTop:"15px",
              background:"#9b5cff",
              border:"none",
              padding:"10px 18px",
              borderRadius:"6px",
              color:"white",
              cursor:"pointer"
            }}
            onClick={()=>alert("Transferencia BancoEstado\nCuentaRUT\n227636165\nJuan Pablo Díaz\nEnviar comprobante por Discord")}
            >
              Comprar
            </button>

          </div>

        ))}

      </div>


      {/* PAYMENT INFO */}

      <div style={{
        marginTop:"60px",
        background:"#0b0f1a",
        padding:"25px",
        borderRadius:"14px"
      }}>

        <h2 style={{color:"#9b5cff"}}>
          Transferencia bancaria Chile
        </h2>

        <p>
          BancoEstado<br/>
          CuentaRUT<br/>
          Juan Pablo Díaz<br/>
          227636165<br/><br/>

          Enviar comprobante a Discord:
        </p>

        <a
        href="https://discord.com/users/dior.dior007"
        target="_blank"
        style={{
          display:"inline-block",
          marginTop:"10px",
          background:"#9b5cff",
          padding:"10px 18px",
          borderRadius:"6px",
          color:"white",
          textDecoration:"none"
        }}
        >
          Enviar comprobante
        </a>

      </div>


    </main>
  )
}
