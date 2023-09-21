import React, { useState } from "react";
import "../BottomSheet.css";

const BottomSheet = () => {
  const [position, setPosition] = useState("closed");

  const toggleSheet = () => {
    if (position === "closed") {
      setPosition("half-open");
    } else if (position === "half-open") {
      setPosition("fully-open");
    } else {
      setPosition("closed");
    }
  };

  return (
    <div className={`bottom-sheet`}>
      <div className="handle">
        <button className="btn" onClick={toggleSheet}>
          Start
        </button>
      </div>
      <div className={`content ${position}`}>
        <div className="para">
          Virat Kohli was born on 5 November 1988 to Prem Kohli and Saroj Kohli
          in Delhi, India. His father was a criminal lawyer while his mother is
          a housewife. He was bred in Delhi's Uttam Nagar and attended Vishal
          Bharti Public School and Saviour Convent. Kohli's father was
          bed-ridden for a month and succumbed to cardiac arrest on 18 December
          2006. When West Delhi Cricket Academy was created in 1998, Kohli was
          part of its first batch and received training under Rajkumar Sharma.
          Kohli made his cricket debut in October 2002 with the Delhi Under-15
          team in the 2002-03 Polly Umrigar Trophy and lead the team for the
          next trophy. He was later selected in the Delhi Under-17 team for the
          2003-04 Vijay Merchant Trophy where he finished as the highest
          run-scorer. At the age of 18, Kohli made his first-class debut for
          Delhi against Tamil Nadu wherein he scored 10 runs. In July 2006, he
          made his debut in the Under-19 team during India's tour of England.
          India won both ODI and Test series. Kohli made his T20 debut next year
          and emerged as the highest run-scorer in the Inter-State T20
          Championship with 179 runs. The year 2008 was a life-changing year for
          Kohli. First, he captained the Under-19 Cricket World Cup-winning
          team. Second, he was bought by RCB for $30,000 on a youth contract for
          IPL. Third, he made his international debut. After recovering from a
          minor injury, Kohli replaced Gambhir for the tri-series in Sri Lanka
          and batter at no. 4 in the 2009 ICC Champions Trophy as Yuvraj Singh
          was recovering from an injury.For the tri-nation ODI tournament in
          Bangladesh in 2010, Tendulkar was rested, thereby enabling Kohli to
          play in each match. Due to his phenomenal performance in Bangladesh,
          he was praised by the then captain MS Dhoni. Kohli was part of the
          World Cup-winning team in 2011 and became the first Indian batsman to
          score a century on World Cup debut. Kohli made his Test debut against
          West Indies at Kingston and performed poorly in the series, amassing
          just 76 runs in five innings. In 2015, he became the first Indian
          batsman to score a century against Pakistan in a World Cup match.
          During South Africa's tour of India, he became the fastest batsman in
          the world to make 1,000 runs in T20I cricket, achieving the feat in
          his 27th innings. During the ODI tour of Australia, Kohli emerged as
          the fastest batsman in the world to cross the 7000-run mark in ODIs,
          and the fastest to score 25 centuries. During the 3 match Test series
          against Sri Lanka at home in 2017, he became the first batsman to
          score six double hundreds as a captain. That year, he scored a total
          of 2818 international runs, the third-highest by an Indian in a
          calendar year and highest ever by an Indian player. In August 2018, he
          ranked no. 1 in the ICC Test rankings. With this, he became the
          seventh Indian batter to achieve this milestone. He became the first
          Indian, first captain and tenth overall to hit three successive
          centuries in ODIs in October 2018. For the tri-series in Zimbabwe in
          2010, Raina was named captain while Kohli was made vice-captain.
          During this, he emerged as the fastest Indian batsman to reach 1,000
          ODI runs. He was appointed as vice-captain for the 2012 Asia Cup due
          to his excellent performance in Australia. Kohli captained the 2013
          West Indies tri-series winning team after Dhoni injured himself during
          the match. He also captained a five-match ODI tour of Zimbabwe, which
          India won by 5-0, their first in any away ODI series. He was named
          vice-captain for the 2014 ICC World T20 Competition where India
          emerged as the runner ups and Kohli as Man of the Tournament as he
          amassed 319 runs in the tournament. He led India in the five-match ODI
          series against Sri Lanka which India won by 5-0. It was the second
          whitewash under his captaincy and fourth in India's ODI history. He
          led India in the first Test of the Australian tour and scored 115 runs
          in the first innings, thereby becoming the fourth Indian to score a
          hundred on his Test captaincy debut. Dhoni announced his retirement
          from Test cricket at the conclusion of the third match between India
          and Australia, and Kohli was appointed as the full-time Test captain
          ahead of the fourth Test at Sydney. At Sydney, Kohli scored 147 in the
          first innings and became the first batter in the Test cricket history
          to score three hundred in his first three innings as Test captain. He
          was named as captain of the 'Team of the Tournament' for the 2016
          World Twenty20 by the ICC. He captained India in the 2017 ICC
          Champions Trophy. India entered the finals but lost to Pakistan. Kohli
          also captained the 2019 Cricket World Cup where India failed to reach
          the finals after losing the semi-final match against New Zealand.
          India's first whitewash under Kohli's captaincy was India's tour of
          New Zealand in 2020. India lost the 2021 ICC World Test Championship
          Final to New Zealand, Kohli's third defeat as captain in knockouts and
          finals of ICC tournaments. India failed to make it through the
          semi-finals in the ICC Men's T20 World Cup 2021 under Kohli's
          captaincy.
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;