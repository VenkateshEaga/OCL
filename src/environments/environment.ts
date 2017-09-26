// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  teamBudget: 200000,
  departmentConstraints: {
    //mention all the different departments and their quota here. 
    //You need not mention quota about "Lucky Draw" players, but make sure to mark their  BU as "Lucky Draw"
    'EA' : 2,
    'Ops' : 2,
    'ET-Macys': 5,
    'ET-Engg': 3,
    'ET-GAP': 2,
    'ET-Others': 2
  }
};
