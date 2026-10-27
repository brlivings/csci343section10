import News from "../models/news";

// Fake stories for testing, images come from picsum instead of the assets folder
export const NEWS = [
  new News(
    "n1",
    "us",
    "Midwest Farmers Brace for Early Frost After Record Harvest Season",
    "Oct 24, 2026",
    "Dana Whitfield",
    "AP",
    "Growers across Iowa, Nebraska and Illinois are racing to bring in the last of their corn and soybeans as forecasters warn of an early hard frost. Many say this year's yields were the best they have seen in a decade, but storage space and rail capacity are already stretched thin. Local co-ops are opening temporary bins to keep up with the surplus.",
    "https://picsum.photos/id/292/800/500"
  ),
  new News(
    "n2",
    "us",
    "City Council in Austin Approves New Downtown Bike Lane Network",
    "Oct 23, 2026",
    "Marcus Reyes",
    "CNN",
    "After nearly two years of public meetings, the Austin City Council voted 8-3 to approve a protected bike lane network connecting downtown to several east side neighborhoods. Supporters say the plan will cut traffic and make cycling safer, while some business owners worry about losing street parking during construction.",
    "https://picsum.photos/id/146/800/500"
  ),
  new News(
    "n3",
    "us",
    "National Parks Report Busiest Fall on Record",
    "Oct 21, 2026",
    "Kelsey Moran",
    "NBC News",
    "Visitor numbers at national parks this fall have topped every previous season, with Acadia, Great Smoky Mountains and Shenandoah leading the way. Park officials are asking guests to arrive early, carpool when they can and check shuttle schedules before heading out to popular trailheads.",
    "https://picsum.photos/id/1018/800/500"
  ),
  new News(
    "n4",
    "us",
    "Gas Prices Dip Ahead of Holiday Travel Season",
    "Oct 19, 2026",
    "Tom Pressley",
    "Fox News",
    "The national average for a gallon of regular gas fell for the fourth week in a row, giving drivers a little relief before the holidays. Analysts point to lower crude prices and steady refinery output, though they caution that a cold winter could push prices back up in the Northeast.",
    "https://picsum.photos/id/1071/800/500"
  ),
  new News(
    "n5",
    "us",
    "High School Robotics Team From Ohio Heads to National Finals",
    "Oct 17, 2026",
    "Priya Nair",
    "USA Today",
    "A team of twelve students from a small public high school outside Columbus earned a spot in the national robotics finals after their robot finished first at the regional event. The team built most of their parts in the school shop and raised travel money through bake sales and a local car wash.",
    "https://picsum.photos/id/20/800/500"
  ),
  new News(
    "n6",
    "world",
    "European Leaders Meet in Brussels to Discuss Energy Prices",
    "Oct 25, 2026",
    "Lukas Brandt",
    "Reuters",
    "Heads of state from across the European Union gathered in Brussels to work out a shared plan for keeping heating costs under control this winter. Proposals on the table include joint gas purchasing and new funding for grid upgrades, but member countries remain split on how much the bloc should spend.",
    "https://picsum.photos/id/1040/800/500"
  ),
  new News(
    "n7",
    "world",
    "Japan Unveils Faster Bullet Train Route Between Tokyo and Osaka",
    "Oct 22, 2026",
    "Hana Kobayashi",
    "BBC",
    "Rail officials in Japan showed off a new section of high speed track that is expected to shave nearly twenty minutes off the trip between Tokyo and Osaka. The line will open to passengers in stages over the next two years, with the first trains carrying commuters by next spring.",
    "https://picsum.photos/id/1067/800/500"
  ),
  new News(
    "n8",
    "world",
    "Heavy Rains Bring Relief to Drought Hit Regions of Kenya",
    "Oct 20, 2026",
    "Samuel Otieno",
    "Al Jazeera",
    "Several days of steady rain have refilled reservoirs and pastures in parts of northern Kenya that had gone without significant rainfall for over a year. Farmers say it is still too early to call the drought over, and aid groups are continuing to deliver water and food to the hardest hit communities.",
    "https://picsum.photos/id/1039/800/500"
  ),
  new News(
    "n9",
    "world",
    "Brazil Expands Protected Areas in the Amazon",
    "Oct 18, 2026",
    "Ana Ribeiro",
    "AP",
    "Brazil's government announced three new protected zones covering a large stretch of rainforest in the northern Amazon. Environmental groups welcomed the move, while officials said extra rangers and satellite monitoring would be used to keep illegal logging out of the area.",
    "https://picsum.photos/id/15/800/500"
  ),
  new News(
    "n10",
    "world",
    "Australia Opens Its Largest Solar Farm in New South Wales",
    "Oct 16, 2026",
    "Liam Fraser",
    "CNN",
    "A massive new solar farm in rural New South Wales has started sending power to the grid, enough to supply hundreds of thousands of homes. The project also includes a battery facility that will store extra energy during the day and release it during the evening peak.",
    "https://picsum.photos/id/1036/800/500"
  ),
  new News(
    "n11",
    "tech",
    "New Smartphone Batteries Promise Two Full Days on a Single Charge",
    "Oct 26, 2026",
    "Jordan Blake",
    "The Verge",
    "Several phone makers say their next models will ship with silicon carbon batteries that hold noticeably more charge in the same space. Early testing suggests most users could go two days between charges, though reviewers want to see how the batteries hold up after a year of use.",
    "https://picsum.photos/id/160/800/500"
  ),
  new News(
    "n12",
    "tech",
    "Universities Add Hands On Cybersecurity Labs for Students",
    "Oct 23, 2026",
    "Rachel Kim",
    "Wired",
    "A growing number of colleges are building practice labs where computer science students can safely attack and defend test networks. Professors say the labs help students land internships, since employers are looking for people who have dealt with real world style problems before graduating.",
    "https://picsum.photos/id/0/800/500"
  ),
  new News(
    "n13",
    "tech",
    "Electric Pickup Sales Jump as Charging Stations Spread",
    "Oct 21, 2026",
    "Chris Delgado",
    "CNBC",
    "Sales of electric pickup trucks rose sharply this quarter, helped by thousands of new fast chargers along major highways. Dealers say buyers in rural areas, who used to worry about range, are now one of the fastest growing groups of customers.",
    "https://picsum.photos/id/111/800/500"
  ),
  new News(
    "n14",
    "tech",
    "Open Source Game Engine Hits One Million Downloads",
    "Oct 18, 2026",
    "Ethan Walsh",
    "TechCrunch",
    "A free and open source game engine passed one million downloads this month, driven mostly by students and small indie studios. Its developers credit the milestone to better mobile export tools and a big batch of beginner tutorials released earlier this year.",
    "https://picsum.photos/id/96/800/500"
  ),
  new News(
    "n15",
    "tech",
    "Space Startup Successfully Lands Reusable Rocket at Sea",
    "Oct 15, 2026",
    "Monica Hale",
    "Fox News",
    "A young aerospace company landed its reusable booster on a drone ship for the first time, a big step toward cheaper satellite launches. The company plans to fly the same booster again before the end of the year if inspections go well.",
    "https://picsum.photos/id/1022/800/500"
  ),
];
