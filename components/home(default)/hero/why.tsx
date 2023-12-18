export default function Why() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-center md:text-left xl:grid xl:grid-cols-5 md:py-32">
      <div className="col-span-1 xl:col-span-2">
        <div className="overflow-hidden rounded-lg xl:aspect-w-4 aspect-h-3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7QobPD5jhug?si=_ERFSiabZ-HtzYhZ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="xl:col-span-3">
        <h4 className="mb-5 h4">Why SCOM COIN?</h4>
        <p className="max-w-3xl mb-5">
          SCOM coin is a cryptocurrency featuring John Cena's character, Ron,
          who made millions from it in the movie "Vacation Friends 2." In the
          film, Ron and Reese give a tip about SCOM coin, and Reese uses the tip
          to make a fortune by investing $30,000, turning it into $6,000,000
          (+20000%) and uses the funds to pay for Reese's release after being
          kidnapped.
        </p>
        <strong>what does SCOM stand for?</strong><br></br> SCOM is a shortcut for
        Secure Commerce for Online Marketers, it was mentioned in the movie and 
        that's what our bot actually does.
      </div>
    </div>
  );
}
