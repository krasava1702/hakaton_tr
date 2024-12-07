from utils.mini_local_memory import LocalMemory
import httpx

async def get_address(latitude, longitude):
    url = "https://geocode-maps.yandex.ru/1.x/"
    params = {
        "apikey": LocalMemory().get("env_data")["YANDEX_API"],
        "geocode": f"{float(longitude)},{float(latitude)}",
        "kind": "house",
        "format": "json",
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            try:
                address_details = data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["metaDataProperty"]["GeocoderMetaData"]["AddressDetails"]
                if address_details["Country"]["AdministrativeArea"]["SubAdministrativeArea"]["Locality"].get("DependentLocality") is not None:
                    data_dict = {
                        "coords": {"long": float(longitude), "lat": float(latitude)},
                        "street": address_details["Country"]["AdministrativeArea"]["SubAdministrativeArea"]["Locality"]["DependentLocality"]["DependentLocality"]["Thoroughfare"]["ThoroughfareName"],
                        "house": address_details["Country"]["AdministrativeArea"]["SubAdministrativeArea"]["Locality"]["DependentLocality"]["DependentLocality"]["Thoroughfare"]["Premise"]["PremiseNumber"]
                    }
                else:
                    data_dict = {
                        "coords": {"long": float(longitude), "lat": float(latitude)},
                        "street": address_details["Country"]["AdministrativeArea"]["SubAdministrativeArea"]["Locality"]["Thoroughfare"]["ThoroughfareName"],
                        "house": address_details["Country"]["AdministrativeArea"]["SubAdministrativeArea"]["Locality"]["Thoroughfare"]["Premise"]["PremiseNumber"]
                    }
                return data_dict
            except Exception as e:
                print(str(e))
                if len(data["response"]["GeoObjectCollection"]["featureMember"]) != 0:
                    print(data["response"]["GeoObjectCollection"]["featureMember"][0])
                return False
        return False