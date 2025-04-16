fetch("https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=9JPTFV2U6RSKZKXJ.")
    .then((resolvedValue)=>{return resolvedValue.json()})
    .then((data)=>{console.log(data)

        const earnings = data["annualEarnings"]
        for(let i = 0; i < earnings.length; i++){
            const currentEarning = earnings[i];
            if(currentEarning["fiscalDateEnding"].includes("2020")){
                console.log(currentEarning["reportedEPS"])
                return
            }
        }
    })