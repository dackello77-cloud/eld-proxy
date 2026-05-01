export default async function handler(req, res) {
  try {
    const response = await fetch("http://monitoring.mm-eldsupport.com/api/daily-eld-reports", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);

  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
