import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=  [
    {
        "source": {
            "id": "news-com-au",
            "name": "News.com.au"
        },
        "author": "Tyson Otto",
        "title": "‘Oh no’: Aussie legend in mortifying moment",
        "description": "Aussie cricket legend Mark Waugh must have wanted a hole to crawl into after being the victim of one of the great stitch-ups on Day 4 of the Boxing Day Test.",
        "url": "https://www.news.com.au/sport/cricket/oh-no-mark-waugh-in-mortifying-stitch-up-as-table-turned/news-story/7653ed216859c66401d13a0b49d2e249",
        "urlToImage": "https://content.api.news/v3/images/bin/fe6cd569552a19ced0f5cf441b995f1e",
        "publishedAt": "2023-12-29T00:40:00Z",
        "content": "Aussie cricket legend Mark Waugh must have wanted a hole to crawl into after being the victim of one of the great stitch-ups on Day 4 of the Boxing Day Test.\r\nWaugh turned a flamethrower on Pakistan … [+3742 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(){
   super();
   this.state={
    articles:this.articles
   }
  }
  async componentDidMount()
  {
    console.log("cdm");
    let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f485c2d044094164a99f51ff359a6bbc";
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles})
  }
  render() {
   
    return (
      <div className='container my-3'>
       <h5>TheCurrent : Top Headlines</h5>
      
       <div className="row">
       { this.state.articles.map((element)=>{
          return <div className="col md 3"key={element.url}>
           <NewsItem title={element.title?element.title:""} newsUrl={element.url} description={element.description?element.description:""} imageUrl={element.urlToImage}/>
           </div>
       })}
       

       </div>
      </div>
    )
  }
}

export default News
