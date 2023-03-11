function OpeningCeremony(score, callbackFnc) {
    setTimeout(() => {
        console.log("Let the games begin!");
        Race100M(score, callbackFnc);
    }, 1000);
}

function Race100M(score, callbackFnc) {
    setTimeout(() => {
        const times = {
            red: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
        };

        const sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
        score[sortedTimes[0][0]] += 50;
        score[sortedTimes[1][0]] += 25;

        console.log(`Race 100M: ${sortedTimes[0][0]} won with ${sortedTimes[0][1]} seconds`);
        console.log(`New Scores:`, score);

        callbackFnc(score, LongJump);
    }, 3000);
}

function LongJump(score, callbackFnc) {
    setTimeout(() => {
        const color = ["red", "yellow", "blue", "green"][Math.floor(Math.random() * 4)];
        score[color] += 150;

        console.log(`Long Jump: ${color} won`);
        console.log(`New Scores:`, score);

        callbackFnc(score, HighJump);
    }, 2000);
}

function HighJump(score, callbackFnc) {
    const color = prompt("What colour secured the highest jump?");

    if (color && score[color]) {
        score[color] += 100;
        console.log(`${color} won High Jump`);
        console.log(`New Scores:`, score);
    } else {
        console.log("Event was cancelled");
    }

    AwardCeremony(score);
}

function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);

    console.log(`\nScores:`);
    sortedScores.forEach((colorScore, i) => {
        const [color, points] = colorScore;
        const place = i + 1;
        console.log(`${color} came ${place}${place === 1 ? "st" : place === 2 ? "nd" : "rd"} with ${points} points.`);
    });
}

// Start the event
const score = { red: 0, yellow: 0, blue: 0, green: 0 };
OpeningCeremony(score, Race100M);