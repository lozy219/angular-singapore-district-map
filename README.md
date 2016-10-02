# angular-singapore-district-map
AngularJS directive of *Singapore District Map for Condominiums and Private Apartments*, based on [Leaflet](http://leafletjs.com/).

### ???
[Singapore's postal districts](https://www.ura.gov.sg/realEstateIIWeb/resources/misc/list_of_postal_districts.htm]) is widely used in Singapore's property agent website. Here is a simple resuable directive of the interactive map.

![map](http://i.imgur.com/E2zJRs0.png)

### Usage

- install via `bower`.

```
bower install angular-singapore-district-map
```

- create `<sg-district-map>` directive in the template.

### Customization

- pass configuration options to `sgDistrictMapStyleProvider.setHighlightStyle`, `sgDistrictMapStyleProvider.setHoverStyle`, `sgDistrictMapStyleProvider.setDefaultStyle`. See [Leaflet's documentation](http://leafletjs.com/reference.html#path).