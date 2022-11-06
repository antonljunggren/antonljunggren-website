export default class ShotLocation {
  country: string | null;
  province: string | null;
  city: string | null;

  constructor(country: string | null, province: string | null, city: string | null) {
    this.country = country;
    this.province = province;
    this.city = city;
  }
}

export function getShotLocationStringFormat(loc: ShotLocation | undefined | null): string {
  if (loc == null || loc == undefined) {
    return '';
  }

  var res = new String();

  if (loc.city != null && loc.city != 'null') {
    res = res.concat(loc.city.toString());
  }

  if (loc.province != null && loc.province != 'null') {
    res = res.concat(' (', loc.province.toString(), ')');
  }

  if (
    loc.country != null &&
    loc.country != 'null' &&
    ((loc.city != null && loc.city != 'null') || (loc.province != null && loc.province != 'null'))
  ) {
    res = res.concat(', ', loc.country);
  } else if (loc.country != null && loc.country != 'null') {
    res = res.concat(loc.country);
  }

  return res.toString();
}
