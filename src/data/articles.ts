// src/data/articles.ts

export const articles = [
  {
    slug: "rta-intercity-analysis",
    title: "Are Intercity Routes RTA's Most Valuable Routes?",
    description: "A data-driven breakdown of the profitability of RTA's E306 intercity bus route vs the X23, calculated during my daily commute.",
    date: "July 2026",
    content: `
I travel to my internship every day on an intercity Dubai–Sharjah RTA double-decker bus. The trip is relatively boring since I have to sit on a bus in an endless sea of traffic, so one day I started reflecting. In the middle of my reflections, I began thinking about the bus route I was using. It costs AED 12 one way. This price is steeper than any other bus I have taken in Dubai. Even for student Nol card holders, who normally receive a 50% discount on all RTA public transport modes, the fare remains the same. No exceptions; everyone pays 12. How much more money are they making per day on an intercity bus compared to a regular bus in Dubai?

Think of the target demographic: regular people going to and from work. Living in Sharjah and working in Dubai has proven to be a very popular choice among residents for many years now, and it is safe to assume these people are regular users. Eventually, I realized that this is an exceptionally strong route for the RTA.

How strong? To gauge this, I decided to do the math. My approach was to break this case down into a ‘cost per day’ metric. This will give us a low-level overview of the profit margins on these routes. Optionally, if we want the bigger picture, it also makes it easier to scale up to the whole fleet. To find out how much more profitable it is, I decided it would be helpful to compare it to another route similar in distance.

The routes of choice were the E306 (Al Ghubaiba Bus Station to Al Jubail Bus Station) and the X23 (Al Ghubaiba Bus Station to International City Bus Station). Both arrive every 20 minutes, and their route lengths are around 25 kilometers. The X23 has roughly 50% more stops, but that is to be expected since it operates entirely within Dubai. Both routes mainly run double-decker buses, which is important to note since they are the most efficient type of bus for high-ridership volume routes. Furthermore, both routes using the same models keeps our comparison much simpler.

Now that the routes have been selected, it is time to tackle how exactly we look at this problem. The approach, as mentioned earlier, is a ‘cost per day’ calculation. We will assume one bus, calculate its total revenue, and subtract the operating costs to find the profit margins. Keep in mind that these are rough estimates and not official figures.

Another caveat to keep in mind is that my claim of "E306 being RTA's most valuable route" is quite loose. There may be other, more profitable routes. However, for today’s comparison, I picked these two since I am most familiar with them, allowing me to make reasonable assumptions for the calculations. Further comparisons involving more routes are likely needed to get the full picture.

## Revenue

Let's start with revenue. Both routes are modeled around a standardized double-decker capacity of 80 passengers, matching both the older Neoplan Centroliner (78 seats) and the newer MAN Lion's City DD with Gemilang bodywork (roughly 80 passengers) that run on these routes.

### E306 (Dubai–Sharjah)

**Assumption:** The E306 is a flat-fare route. Every rider pays AED 12 regardless of the distance traveled and regardless of student or citizen Nol card status—intercity routes do not carry the 50% student/citizen discount that local routes do.

**Formula:** Revenue per trip = Capacity × Occupancy % × AED 12

| Occupancy | Revenue per trip (AED) |
| :---: | :---: |
| 50% | 480.00 |
| 75% | 720.00 |
| 100% | 960.00 |

### X23 (Dubai-only, double-decker)

**Assumption:** X23 fares are zone-based (AED 3 / AED 5 / AED 7.50 depending on zones crossed) rather than flat. A full end-to-end rider hits the AED 7.50 cap, but since the route has 21–27 stops over ~25–27 km, most riders board and alight partway through. Therefore, the true average fare per rider is well below the maximum cap. A blended average regular fare of AED 5.50 is used. Ridership is also split into two categories: 85% regular fare riders and 15% student Nol card holders (who receive the standard 50% local-route discount, i.e., AED 2.75). The 15% student share is an estimate—the X23 does not run near a major student or university catchment area, so a lower student share was assumed relative to a dedicated school-service route.

**Formula:** Blended fare = (0.85 × 5.50) + (0.15 × 2.75) = AED 5.0875  
**Formula:** Revenue per trip = Capacity × Occupancy % × AED 5.0875

| Occupancy | Revenue per trip (AED) |
| :---: | :---: |
| 50% | 203.50 |
| 75% | 305.25 |
| 100% | 407.00 |

## Operating Costs

Now for the more challenging part—operating costs. There was no public data from the RTA available to use, so this is just a careful shot in the dark backed by some realistic assumptions. I do not have precise knowledge of insurance costs or any other minor maintenance overheads that might have been missed. This is purely my own logical reasoning, built up from whatever real reference points I could find.

### Trips per day

**Assumption:** A 12-hour operating day per bus (2 driver shifts), with an assumed one-way trip cycle time of roughly 60 minutes, including turnaround, giving 12 one-way trips per day per bus. This is applied identically to both routes for simplicity, given their similar distances.

### Fuel

**Assumption:** Fuel economy of 2.5 km/L for both routes. This was derived from a European double-decker benchmark of 25–30 L/100km (3.3–4.0 km/L), adjusted downward to account for Dubai's heavy stop-and-go traffic and near-constant air conditioning load. The diesel price used is AED 3.60/liter (July 2026, UAE Fuel Price Committee). Distance used: E306 ≈ 23.5 km one-way (midpoint of a 22–25 km range across sources); X23 ≈ 26 km one-way (midpoint of a 25–27 km range).

**Formula:** Fuel cost per trip = Distance ÷ 2.5 km/L × AED 3.60/L  
**Result:** E306: AED 33.84 per trip — X23: AED 37.44 per trip

### Tires

**Assumption:** The double-decker chassis is assumed to run 6 tires total (3-axle, single-fitment: 2 steer, 2 drive, 2 tag). The tire price is assumed at AED 2,450 (midpoint of the Michelin X InCity heavy-duty city bus range, AED 2,000–2,900). Steer tires are replaced every 127,500 km (midpoint of 95,000–160,000 km); drive/tag tires are replaced every 200,000 km (midpoint of 160,000–240,000 km).

**Formula:** Cost per km = [(2 × 2,450) ÷ 127,500] + [(4 × 2,450) ÷ 200,000] = AED 0.0874/km  
**Result:** E306: AED 2.05 per trip — X23: AED 2.27 per trip

### Labor (driver + technician)

**Assumption:** Drivers and technicians are both assumed to earn AED 5,000–10,000/month, with a midpoint of AED 7,500/month used for modeling. Each bus requires 2 driver shifts per day to cover the 12-hour operating window, plus a shared technician allocated across roughly 10 buses. This is treated as a flat cost, identical for both routes.

**Formula:** Driver cost = 2 × AED 7,500 = AED 15,000/month → AED 500/day  
**Formula:** Technician cost = AED 7,500 ÷ 10 buses = AED 750/month/bus → AED 25/day  
**Formula:** Total labor = AED 525/day ÷ 12 trips/day = AED 43.75 per trip

### Maintenance (servicing, cleaning, insurance)

**Assumption:** Tires are costed separately above. This category bundles everything else—servicing/parts, cleaning, and insurance—into a single flat estimate of AED 120/day per bus, adjusted down from a US commercial-fleet maintenance benchmark (~AED 8,000–12,000/year) to account for generally lower UAE labor costs. This is applied flat and identically across both routes.

**Formula:** AED 120/day ÷ 12 trips/day = AED 10.00 per trip

### Salik tolls (excluded)

Salik toll costs were deliberately excluded from this model. RTA public buses are exempt from Salik tolls under RTA's public-service vehicle exemption. This removes what would otherwise have been an asymmetric cost between the two routes, since Salik gates exist only within Dubai (Sharjah currently has no toll system of its own), meaning the E306 could theoretically have crossed more toll-relevant infrastructure than the X23 if the exemption didn't apply.

### Total operating cost per trip

| Cost factor | E306 (AED) | X23 (AED) | E306 share | X23 share |
| :---: | :---: | :---: | :---: | :---: |
| Fuel | 33.84 | 37.44 | 37.8% | 40.1% |
| Tires | 2.05 | 2.27 | 2.3% | 2.4% |
| Labor | 43.75 | 43.75 | 48.8% | 46.8% |
| Maintenance | 10.00 | 10.00 | 11.2% | 10.7% |
| Total | 89.64 | 93.46 | 100% | 100% |

Labor is the single biggest cost driver on both routes (roughly 47–49% of total operating cost), fuel is second (roughly 38–40%), and tires are negligible (around 2%). Total operating cost per trip is also very close between the two routes (AED 89.64 vs AED 93.46, only about 4% apart)—the routes are similar enough in distance that costs do not diverge significantly. Whatever gap shows up in profit margins, it is not coming from the cost side.

## Profit Margins

Now for the most insightful part—profit margins. Profit is simply revenue minus operating cost per trip at each occupancy scenario.

| Occupancy | E306 Revenue | E306 Cost | E306 Profit | E306 Margin |
| :---: | :---: | :---: | :---: | :---: |
| 50% | 480.00 | 89.64 | 390.36 | 81.3% |
| 75% | 720.00 | 89.64 | 630.36 | 87.6% |
| 100% | 960.00 | 89.64 | 870.36 | 90.7% |

| Occupancy | X23 Revenue | X23 Cost | X23 Profit | X23 Margin |
| :---: | :---: | :---: | :---: | :---: |
| 50% | 203.50 | 93.46 | 110.04 | 54.1% |
| 75% | 305.25 | 93.46 | 211.79 | 69.4% |
| 100% | 407.00 | 93.46 | 313.54 | 77.0% |

The data reveals some fascinating insights. Even at 50% occupancy, E306's margin (81.3%) beats X23's margin at full capacity (77.0%). Operating cost per trip is very similar between the two routes (AED 89.64 vs 93.46—only ~4% apart), but E306's flat AED 12 fare generates far more revenue per trip than X23's zone-based blended fare. Consequently, nearly all of the margin gap comes from the revenue side, not the cost side.

In short, the margins are excellent, and it is indeed a highly profitable route to run.

| Occupancy | E306 Profit | X23 Profit | E306 is more profitable by... |
| :---: | :---: | :---: | :---: |
| 50% | 390.36 | 110.04 | +254.7% (E306 profit is ~3.55× X23's) |
| 75% | 630.36 | 211.79 | +197.7% (~2.98×) |
| 100% | 870.36 | 313.54 | +177.6% (~2.78×) |

While this result might seem quite obvious—surely intercity is more profitable because of its higher cost to ride—this exercise was meant to find concrete numbers that show exactly how much better for business intercity routes are. By keeping ridership (occupancy) constant across both routes, where the only actual differences are the fare structure on the revenue side and distance on the cost side, we build a model that isolates and clarifies the underlying drivers of the business for both routes.

## Why is there a customer base for E30x routes?

I want to discuss why this route is so popular. I should preface this by saying that this section is largely speculative, reflecting an analysis based on my personal observations after using this route for many years for various purposes. Please take this with a grain of salt.

Who is using this route? I indicated earlier the consumer base of the E306 and other intercity routes, but I want to dive a little deeper into that perspective. The numbers tell a very clear story, and the demographics tell another. There are many alternatives to the RTA—such as driving oneself, carpooling, and private buses—all of which are highly prevalent. But why does the RTA's service remain so popular? I believe it comes down to convenience.

For many, their workplaces and destinations are easily accessible from the stations along the way. These routes head into the heart of Dubai with countless connecting links to metro stations and landmarks. The population of the UAE is large enough to sustain demand across many different commuter preferences. While many use private buses or carpool, many also choose the RTA because it suits their needs better than a personal vehicle would. For a compulsory trip made five days a week, reliability is paramount. Public transport is a government-run service with exceptionally high uptime, making it the most practical choice for this specific use case.

## Limitations

* This piece compares exactly two routes out of the RTA's full network. It presents a reasoned case for the E306 being a strong route for the RTA, rather than definitive proof that it is the single most valuable route in the entire system. Doing so would require expanding this exercise across many more routes.
* Occupancy was held equal across both routes at each scenario (50/75/100%) so that the fare difference could be isolated as the driver of the profit gap. While this is a deliberate methodological choice, it means the results only hold if real-world ridership on the E306 and X23 is actually similar. If one route runs fuller than the other in practice, the real profit gap would differ from what is shown here.
* Several cost inputs are estimates rather than published figures since the RTA does not release this data publicly. These include fuel economy (2.5 km/L, adjusted from a European benchmark for Dubai traffic conditions), the maintenance/servicing/insurance bundle (AED 120/day, adjusted from a US fleet-cost benchmark), driver and technician wages (midpoint of an assumed AED 5,000–10,000/month range), tire replacement intervals (midpoints of manufacturer-cited ranges), and the student ridership share on the X23 (15%, a judgment call with no official ridership data behind it). Route distances also use midpoints of ranges that vary across sources.
* Trips per day (12 per bus) is based on an assumed 12-hour operating day and a 60-minute trip cycle, not on the RTA's actual scheduling or bus-rotation data.
* This model also does not account for any possible fee or revenue-sharing arrangement between the RTA and Sharjah's transport authority (SRTA) for operating into Sharjah's bus terminals. Whether such an arrangement exists publicly is unclear, and I could not find or confirm one. However, if it does, it would reduce the E306's actual profitability relative to what is shown here.
* The "Why is there a customer base for E30x routes?" section is explicitly speculative and based on personal experience riding the route, not on official ridership survey data.
* All figures throughout are estimates built from publicly available information and reasonable assumptions, not the RTA's actual internal financials.
    `
  }
];