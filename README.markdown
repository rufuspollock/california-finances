Historical data on revenue and expenditure from the [California State Legislative
Analyst's Office][home]. Expenditure is provided for period from 1985 to the present.
Revenue information is provided from 1951 to the present.

[home]: http://www.lao.ca.gov/laoapp/LAOMenus/lao_menu_economics.aspx

## Data

* [Consolidated expenditure (csv)][exp-csv] - expenditure extracted from source
  Excel file and tidied in various ways (see scripts/clean.js)

[exp-csv]: http://data.openspending.org/datasets/california-budget/data/Historical_Expenditures_Source.csv

Main files provided at source:

* [State of California Expenditures, 1984-85 to 2011-12 (xlsx)][exp-xls]
* [State of California Revenues, 1950-51 to 2011-12 (xlsx)][rev-xls]
* [State of California Personnel-Years, 1982-83 to 2006-07 (xlsx)][personnel-xls]

[exp-xls]: http://www.lao.ca.gov/sections/econ_fiscal/Historical_Expenditures_Source.xlsx
[rev-xls]: http://www.lao.ca.gov/sections/econ_fiscal/Historical_Revenues.xlsx
[personnel-xls]: http://www.lao.ca.gov/sections/econ_fiscal/Historical_Personnel_Years.xls

Note the disclaimer on the website:

> Because of many changes over the years (including, but not limited to,
> changes in the sources of funding for certain state programs, deferrals of
> scheduled payments and tax collections, and other accounting changes), this
> data may not provide sufficient information to evaluate trends in general
> state spending, spending for particular programs, or state revenues.
> Consulting other sources, such as the LAO's annual Spending Plan
> publications, is advised when conducting such trend analyses.

## Processing

Clean up souce data:

    node scripts/clean.js

Upload to the data server:

    s3cmd sync --acl-public data/Historical_Expenditures_Source.csv s3://data.openspending.org/datasets/california-budget/data/Historical_Expenditures_Source.csv

Then import to OpenSpending.

