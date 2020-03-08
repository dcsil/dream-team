import time
import urllib.request
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import DesiredCapabilities
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import sys


class Venue:

    def __init__(self):
        self.name = None
        self.country = None
        self.address = None
        self.phone = None
        self.value = None
        self.aquisition_cost = None


def go_to_page(page):
    driver.get("https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=" + page + "&page=1")
    time.sleep(2)
    venue_xpath = "//div[@class='Details-sc-1vh1927-0 jXAMsJ']"

    count = len(driver.find_elements_by_xpath(venue_xpath))
    print("\n\n\n\n")
    for i in range(count):
        x = Venue()
        x.name = driver.find_element_by_xpath(
            "({}//h3/a)[{}]".format(venue_xpath, i + 1)).text
        x.phone = driver.find_element_by_xpath(
            "({}//p/a)[{}]".format(venue_xpath, i + 1)).text
        print(x.phone)
    print("\n\n\n\n")


if __name__ == "__main__":
    chromedriver = "/Users/RibhavKapur/desktop/everything/chromedriver"  # SPECIFIC TO USER
    chrome_options = webdriver.ChromeOptions()

    # chrome_options.add_argument("--headless")
    # chrome_options.add_argument('window-size=1920x1080')

    # capabilities = DesiredCapabilities.CHROME.copy()
    # capabilities['acceptSslCerts'] = True
    # capabilities['acceptInsecureCerts'] = True

    # chrome_options.add_argument("--disable-gpu")
    # chrome_options.add_argument("--disable-extensions")
    # chrome_options.add_experimental_option("useAutomationExtension", False)
    # chrome_options.add_argument("--proxy-server='direct://'")
    # chrome_options.add_argument("--proxy-bypass-list=*")
    # chrome_options.add_argument("--start-maximized")

    prefs = {"profile.default_content_setting_values.notifications": 2}
    chrome_options.add_experimental_option("prefs", prefs)
    driver = webdriver.Chrome(options=chrome_options,
                              executable_path=chromedriver)  # , desired_capabilities=capabilities)

    go_to_page("restaurant")
    driver.quit()
