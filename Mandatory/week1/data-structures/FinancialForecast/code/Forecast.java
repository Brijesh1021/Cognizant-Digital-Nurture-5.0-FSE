public class Forecast {

    public double predictFutureValue(double currentValue,double growthRate,int years) {

        if (currentValue < 0 || years < 0) {
            throw new IllegalArgumentException(
                    "Current value and years cannot be negative");
        }

        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(currentValue,growthRate,years - 1) * (1 + growthRate);
    }

    public void displayForecast(double currentValue,double growthRate,int years) {

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.println("Current Value : " + currentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : %.2f%n", futureValue);
    }
}