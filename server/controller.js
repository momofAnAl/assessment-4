module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A lifetime of happiness lies ahead of you.", 
                        "All the effort you are making will ultimately pay off.",
                        "You will become more and more wealthy.",
                        "The change you started already have far-reaching effects. Be ready.",
                        "Everywhere you choose to go, friendly faces will greet you.",
                        "An important person will offer you support.",
                        "You will always get what you want through your charm and personality"
                ];

        let randomftIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomftIndex];

        res.status(200).send(randomFortune);
    },

    getAdvice: (req, res) => {
        const advices = ["Do the best you can until you know better.",
                        "Never stop learning and growing as a person.",
                        "Make sure you drink plenty of water. Every cell in your body needs it.",
                        "Chang your thinking, change your life.",
                        "Failure is a required part of success.",
                        "Focus on the things you can control."
                    ];
        let randomAdIndex = Math.floor(Math.random() * advices.length);
        let randomAdvice = advices[randomAdIndex];

        res.status(200).send(randomAdvice);
    },

    gethikingTrails: (req, res) => {
        const hikingTrails = ["Discovery Park and Light House Loop https://www.alltrails.com/trail/us/washington/discovery-park-and-lighthouse-loop-trail",
                            "The Washington Park Arboretum https://www.alltrails.com/trail/us/washington/the-washington-park-arboretum",
                            "Green Lake Trail https://www.alltrails.com/trail/us/washington/green-lake-loop-trail",
                            "Seward Park Perimeter Loop https://www.alltrails.com/trail/us/washington/seward-park-perimeter-loop",
                            "Foster Island Trail https://www.alltrails.com/trail/us/washington/foster-island-trail",
                            "Bird Nest Lookout Beach https://www.alltrails.com/trail/us/washington/birds-nest-and-lookout-beach"
                        ];
        let randomhikeIndex = Math.floor(Math.random() * hikingTrails.length);
        let randomhikingTrail = hikingTrails[randomhikeIndex];

        res.status(200).send(randomhikingTrail);
                        
    },

    getWorldTime: (req, res) => {
        
    }
}