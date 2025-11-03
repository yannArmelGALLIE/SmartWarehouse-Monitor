#include <Arduino.h>

#include <DHT.h>

DHT dht(4, DHT11);

void setup() {
  dht.begin();
  delay(2000);

  Serial.begin(115200);
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readTemperature();

  Serial.print("Temp: ");
  Serial.print(temp);
  Serial.print(" C° ");
  Serial.print("\n");
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print( " % " );
  Serial.print("\n");
  delay(2000);
}