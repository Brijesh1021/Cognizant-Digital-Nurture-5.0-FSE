package com.cognizant.orm_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);

        LOGGER.info("Inside main");

        testGetAllCountries();
        testAddCountry();
    }

    private static void testGetAllCountries() {

        LOGGER.info("Start");

        List<Country> countries = countryService.getAllCountries();

        LOGGER.info("===== Countries List =====");

        for (Country country : countries) {
            LOGGER.info("Code: {}, Name: {}", country.getCode(), country.getName());
        }

        LOGGER.info("==========================");

        LOGGER.info("End");
    }

    private static void testAddCountry() {

        Country country = new Country();
        country.setCode("JP");
        country.setName("Japan");

        countryService.addCountry(country);

        LOGGER.info("Country Added Successfully");

        Country addedCountry = countryService.getCountry("JP");

        LOGGER.info("Inserted Country -> Code: {}, Name: {}",
                addedCountry.getCode(),
                addedCountry.getName());
    }

}