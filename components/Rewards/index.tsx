export default function Rewards() {
  return (
    <>
      <section className="max-w-4xl tracking-wide text-center">
        <div className="flex flex-col items-center justify-center gap-5 my-[8vh]">
          <h4 className="mb-5 leading-relaxed xl:leading-loose h4">
            What do I gain by supporting and sharing on my socials?
          </h4>
          <p className="">
            We appreciate your support in helping us spread the word about SCOM
            DAD, a project we're passionate about. In return for your support,
            we offer compensation based on your follower count and SCOM
            holdings. Every three days, we'll provide you with a post to share
            on your socials. Rest assured, these posts won't include any
            financial advice.
          </p>
          <h4 className="mb-5 leading-relaxed xl:leading-loose h4">
            Compensation for your support
          </h4>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="flex flex-col max-w-2xl gap-2 ">
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Follower Count</th>
                    <th className="px-4 py-2">SCOM Holder</th>
                    <th className="px-4 py-2">Non Holder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">
                      <b>300</b> to <b>1K</b>
                    </td>
                    <td className="px-4 py-2 border">$15</td>
                    <td className="px-4 py-2 border">$10</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">
                      <b>1K</b> to <b>5K</b>
                    </td>
                    <td className="px-4 py-2 border">$35</td>
                    <td className="px-4 py-2 border">$25</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <b>5K</b> to <b>10K</b>
                    </td>
                    <td className="px-4 py-2 border">$60</td>
                    <td className="px-4 py-2 border">$40</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">
                      <b>10K</b> to <b>20K</b>
                    </td>
                    <td className="px-4 py-2 border">$100</td>
                    <td className="px-4 py-2 border">$75</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <b>20K</b> to <b>50K</b>
                    </td>
                    <td className="px-4 py-2 border">$150</td>
                    <td className="px-4 py-2 border">$125</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">
                      <b>50K</b> to <b>150K</b>
                    </td>
                    <td className="px-4 py-2 border">$200</td>
                    <td className="px-4 py-2 border">$175</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      <b>150K</b> to <b>250K</b>
                    </td>
                    <td className="px-4 py-2 border">$300</td>
                    <td className="px-4 py-2 border">$250</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2 border">
                      <b>250K</b> to <b>500K</b>
                    </td>
                    <td className="px-4 py-2 border">$700</td>
                    <td className="px-4 py-2 border">$500</td>
                  </tr>
                </tbody>
              </table>
                <div className="">
                  <b>500K and more</b>: send an email to{" "} 
                  <a href="mailto:support@scomcoin.io" className="text-primary hover:text-secondary ">support@scomcoin.io</a>{" "}
                  that includes your socials and the easiest way to contact you.
                  <br></br>
                  *To qualify as a <b>SCOM holder</b>, you need to be holding 1,000 SCOM Tokens
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
