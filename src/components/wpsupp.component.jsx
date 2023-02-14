import React, { useState } from "react";

const WpSupp = () => {
    const [fileContents, setFileContents] = useState("");
    const [country, setCountry] = useState("");
    const [ssid, setSsid] = useState("");
    const [password, setPassword] = useState("");

    const handleShowContents = (e) => {
    e.preventDefault();
    const contents = `ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1
    country=${country}

    network={
        ssid="${ssid}"
        psk="${password}"
        key_mgmt=WPA-PSK
    }`;
    setFileContents(contents);
    };

    const handleDownload = (e) => {
    e.preventDefault();
    const contents = `ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1
    country=${country}

    network={
        ssid="${ssid}"
        psk="${password}"
        key_mgmt=WPA-PSK
    }`;
    const blob = new Blob([contents], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "wp_supplicant.conf";
    link.click();
    };

    return (
        <div className="lg:grid lg:grid-cols-2 m-3 border border-black rounded-lg bg-c1/30 shadow-lg shadow-black">
            <div className="p-3">
                <h1 className="font-extrabold p-3 text-lg text-black">wp_supplicant generator</h1>
                <p className="p-3">Get your Raspberry Pi connected to your wifi network effortlessly by generating a wpa_supplicant.conf file. Simply provide the country code, SSID and password of your wifi network</p>
                <p className="p-3 text-sm">(your wifi ssid and password is not stored on this website)</p>
                <p className="p-3">Copy the generated wpa_supplicant.conf file to the /boot directory of your Raspbian SD card and let it do the rest. Upon boot, the Pi will automatically copy the file into /etc/wpa_supplicant and connect to your network.</p>
            </div>
            <div className="p-3 flex justify-center">
                <form>
                    <span>Country code</span>
                    <div className="mb-3">
                    <input
                        className="bg-transparent rounded border border-black shadow shadow-black px-1"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    </div>
                    <span>Wifi name</span>
                    <div className="mb-4">
                    <input
                        className="bg-transparent rounded border border-black shadow shadow-black px-1"
                        type="text"
                        value={ssid}
                        onChange={(e) => setSsid(e.target.value)}
                    />
                    </div>
                    <span>Wifi password</span>
                    <div className="mb-4">
                    <input
                        className="bg-transparent rounded border border-black shadow shadow-black px-1"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <button className="m-1 text-sm border-black border bg-white text-black hover:bg-transparent hover:border hover:border-black p-1 rounded" onClick={handleShowContents}>Show Contents </button>
                    <button className="m-1 text-sm border-black border bg-white text-black hover:bg-transparent hover:border hover:border-black p-1 rounded" onClick={handleDownload}> Download </button>
                    {fileContents && (
                    <pre>{fileContents}</pre>
                    )}
                </form>
            </div>
        </div>

  );
};

export default WpSupp;