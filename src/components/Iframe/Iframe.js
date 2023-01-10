const Iframe = () => {
    return (
      <>
      <div>
        <div style={{
                "padding":"56.25% 0 0 0",
                "position":"relative",
            }}>
            <iframe style={{
            "position":"absolute",
            "top":"0",
            "left":"0",
            "width":"100%",
            "height":"100%",
            "borderRadius":"15px",
            "boxShadow":"rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }} 
            src="https://streamtech.ml:5443/streamtech/play.html?id=569043759418362082090786&playOrder=vod"
            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
            ></iframe>
        </div>
      </div>
      </>
    );
  };
  export default Iframe;
  