import scrapy


class MusicBusinessSpider(scrapy.Spider):
    name = 'MusicBusinessSpider'
    start_urls = [
        'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=restaurant&page=1',
    ]

    def parse(self, response):
        print("\n\n\n\n\n\n\n\n\n\n\n\n")
        print(response)
        print("\n\n\n\n\n\n\n\n\n\n\n\n")
        for venue in response.xpath("//div[@class='Details-sc-1vh1927-0 jXAMsJ']"):
            print("\n\n\n\n\n\n\n\n\n\n\n\n")
            print(venue)
            print("\n\n\n\n\n\n\n\n\n\n\n\n")
            yield{
                'venue_information': venue.extract()
            }

        next_page = response.xpath(
            "//a[@class='Item-wj4o8d-0 Next-btcjpv-0 hgtCrR']/@href").extract()
        if next_page is not None:
            next_page_link = response.urljoin(next_page)
            yield scrapy.Request(url=next_page_link, callable=self.parse)
