# Games Leaderboard Backend

Backend for the leaderboards of some of my online games (e.g. [Projective Set](https://jchboettcher.github.io/proset/) and [Picnic Ants](https://jchboettcher.github.io/ants/)).

Backend structure consists of a set of users. Each user has a name, is linked to a single game and corresponding level, has two score categories, and has a timestamp for when the score was acheived. The name is the display name in the leaderboard. The game and level designate which game and level the score is from. Having two score categories allow versatility for games where there might be two metrics of a "good score" (e.g. Picnic Ants); there are queries for ranking by score1 and by score2. Finally, the timestamp allows us to break ties between scores, and also allows us to have a recent scores query as well.

To connect to your own database, run ```npm run copy-env``` in the terminal and fill in the appropriate credentials.