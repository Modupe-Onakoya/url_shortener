

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { url } = req.body;

        const response = await fetch("https://api.tinyurl.com/create", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.TINYURL_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                url: url,
                domain: "tinyurl.com"
            })
        });

        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}