import { Icon } from "@chakra-ui/react";

import colors from "lib/styles/customTheme/colors";

interface Props {
  color?: string;
}

export const Logotype = ({ color = colors.white.base }: Props) => {
  return (
    <Icon width="171" height="35" viewBox="0 0 1533 255" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M471.133 0L453.762 23.6909L461.779 127.069L427.484 187.804L470.687 255L513 187.804L479.595 127.069L488.949 23.6909L471.133 0ZM464.006 24.983L471.133 8.61475L478.259 24.983L471.133 104.67L464.006 24.983ZM470.687 145.591L495.184 187.373L470.687 229.155L446.19 187.373L470.687 145.591Z"
        fill={colors.yellow.base}
      />
      <path
        d="M470.392 200.994C376.862 201.978 406.44 83.3026 406.44 14.4101L425.925 36.9642C425.925 93.1444 403.642 185.165 470.392 185.821C537.142 186.477 515.359 95.6048 515.359 37.7843L536.142 14C536.142 89.0436 563.922 200.01 470.392 200.994Z"
        fill={color}
      />
      <path
        d="M470.5 158L489 188L470.5 218L452 188L470.5 158Z"
        fill={colors.yellow.base}
      />
      <path
        d="M1163.55 154.806H1089.05L1073.63 192H1053L1126.3 18L1200 192H1178.97L1163.55 154.806ZM1156.54 137.803L1126.3 64.9024L1096.06 137.803H1156.54Z"
        fill={color}
      />
      <path
        d="M1221.94 112.62C1224.94 107.1 1229.38 102.9 1235.26 100.02C1241.14 97.14 1248.28 95.7 1256.68 95.7V112.44C1255.72 112.32 1254.4 112.26 1252.72 112.26C1243.36 112.26 1235.98 115.08 1230.58 120.72C1225.3 126.24 1222.66 134.16 1222.66 144.48V192H1205.38V96.6H1221.94V112.62ZM1388.32 95.7C1400.32 95.7 1409.8 99.18 1416.76 106.14C1423.84 113.1 1427.38 123.42 1427.38 137.1V192H1410.1V139.08C1410.1 129.84 1407.94 122.88 1403.62 118.2C1399.42 113.52 1393.36 111.18 1385.44 111.18C1376.68 111.18 1369.72 113.94 1364.56 119.46C1359.4 124.86 1356.82 132.66 1356.82 142.86V192H1339.54V139.08C1339.54 129.84 1337.38 122.88 1333.06 118.2C1328.86 113.52 1322.8 111.18 1314.88 111.18C1306.12 111.18 1299.16 113.94 1294 119.46C1288.84 124.86 1286.26 132.66 1286.26 142.86V192H1268.98V96.6H1285.54V110.82C1289.02 105.9 1293.58 102.18 1299.22 99.66C1304.86 97.02 1311.28 95.7 1318.48 95.7C1325.92 95.7 1332.52 97.2 1338.28 100.2C1344.04 103.2 1348.48 107.58 1351.6 113.34C1355.2 107.82 1360.18 103.5 1366.54 100.38C1373.02 97.26 1380.28 95.7 1388.32 95.7ZM1532.84 96.6L1486.58 201.54C1482.5 211.26 1477.7 218.1 1472.18 222.06C1466.78 226.02 1460.24 228 1452.56 228C1447.88 228 1443.32 227.22 1438.88 225.66C1434.56 224.22 1430.96 222.06 1428.08 219.18L1435.46 206.22C1440.38 210.9 1446.08 213.24 1452.56 213.24C1456.76 213.24 1460.24 212.1 1463 209.82C1465.88 207.66 1468.46 203.88 1470.74 198.48L1473.8 191.82L1431.68 96.6H1449.68L1482.98 172.92L1515.92 96.6H1532.84Z"
        fill={color}
      />
      <path
        d="M127.26 69V195H109.26V138.84H36.9V195H18.9V69H36.9V123.18H109.26V69H127.26ZM239.674 147.84C239.674 149.16 239.554 150.9 239.314 153.06H161.914C162.994 161.46 166.654 168.24 172.894 173.4C179.254 178.44 187.114 180.96 196.474 180.96C207.874 180.96 217.054 177.12 224.014 169.44L233.554 180.6C229.234 185.64 223.834 189.48 217.354 192.12C210.994 194.76 203.854 196.08 195.934 196.08C185.854 196.08 176.914 194.04 169.114 189.96C161.314 185.76 155.254 179.94 150.934 172.5C146.734 165.06 144.634 156.66 144.634 147.3C144.634 138.06 146.674 129.72 150.754 122.28C154.954 114.84 160.654 109.08 167.854 105C175.174 100.8 183.394 98.7 192.514 98.7C201.634 98.7 209.734 100.8 216.814 105C224.014 109.08 229.594 114.84 233.554 122.28C237.634 129.72 239.674 138.24 239.674 147.84ZM192.514 113.28C184.234 113.28 177.274 115.8 171.634 120.84C166.114 125.88 162.874 132.48 161.914 140.64H223.114C222.154 132.6 218.854 126.06 213.214 121.02C207.694 115.86 200.794 113.28 192.514 113.28ZM254.669 61.44H271.949V195H254.669V61.44ZM346.523 98.7C355.763 98.7 364.043 100.74 371.363 104.82C378.683 108.9 384.383 114.6 388.463 121.92C392.663 129.24 394.763 137.7 394.763 147.3C394.763 156.9 392.663 165.42 388.463 172.86C384.383 180.18 378.683 185.88 371.363 189.96C364.043 194.04 355.763 196.08 346.523 196.08C339.683 196.08 333.383 194.76 327.623 192.12C321.983 189.48 317.183 185.64 313.223 180.6V229.92H295.943V99.6H312.503V114.72C316.343 109.44 321.203 105.48 327.082 102.84C332.963 100.08 339.443 98.7 346.523 98.7ZM345.083 180.96C351.203 180.96 356.663 179.58 361.463 176.82C366.383 173.94 370.223 169.98 372.983 164.94C375.863 159.78 377.303 153.9 377.303 147.3C377.303 140.7 375.863 134.88 372.983 129.84C370.223 124.68 366.383 120.72 361.463 117.96C356.663 115.2 351.203 113.82 345.083 113.82C339.083 113.82 333.623 115.26 328.703 118.14C323.903 120.9 320.063 124.8 317.183 129.84C314.423 134.88 313.043 140.7 313.043 147.3C313.043 153.9 314.423 159.78 317.183 164.94C319.943 169.98 323.783 173.94 328.703 176.82C333.623 179.58 339.083 180.96 345.083 180.96Z"
        fill={color}
      />
      <path
        d="M589.46 150.54L569.66 168.9V195H552.38V61.44H569.66V147.12L621.68 99.6H642.56L602.42 139.02L646.52 195H625.28L589.46 150.54ZM669.628 115.62C672.628 110.1 677.068 105.9 682.947 103.02C688.828 100.14 695.968 98.7 704.368 98.7V115.44C703.408 115.32 702.088 115.26 700.408 115.26C691.048 115.26 683.668 118.08 678.268 123.72C672.988 129.24 670.348 137.16 670.348 147.48V195H653.068V99.6H669.628V115.62ZM751.229 98.7C764.429 98.7 774.509 101.94 781.469 108.42C788.549 114.9 792.089 124.56 792.089 137.4V195H775.709V182.4C772.829 186.84 768.689 190.26 763.289 192.66C758.009 194.94 751.709 196.08 744.389 196.08C733.709 196.08 725.129 193.5 718.649 188.34C712.289 183.18 709.109 176.4 709.109 168C709.109 159.6 712.169 152.88 718.289 147.84C724.409 142.68 734.129 140.1 747.449 140.1H774.809V136.68C774.809 129.24 772.649 123.54 768.329 119.58C764.009 115.62 757.649 113.64 749.249 113.64C743.609 113.64 738.089 114.6 732.689 116.52C727.289 118.32 722.729 120.78 719.009 123.9L711.809 110.94C716.729 106.98 722.609 103.98 729.449 101.94C736.289 99.78 743.549 98.7 751.229 98.7ZM747.269 182.76C753.869 182.76 759.569 181.32 764.369 178.44C769.169 175.44 772.649 171.24 774.809 165.84V152.52H748.169C733.529 152.52 726.209 157.44 726.209 167.28C726.209 172.08 728.069 175.86 731.789 178.62C735.509 181.38 740.669 182.76 747.269 182.76ZM815.068 99.6H832.348V195H815.068V99.6ZM823.708 81.24C820.348 81.24 817.528 80.16 815.248 78C813.088 75.84 812.008 73.2 812.008 70.08C812.008 66.96 813.088 64.32 815.248 62.16C817.528 59.88 820.348 58.74 823.708 58.74C827.068 58.74 829.828 59.82 831.988 61.98C834.268 64.02 835.408 66.6 835.408 69.72C835.408 72.96 834.268 75.72 831.988 78C829.828 80.16 827.068 81.24 823.708 81.24ZM907.281 98.7C919.401 98.7 929.001 102.24 936.081 109.32C943.281 116.28 946.881 126.54 946.881 140.1V195H929.601V142.08C929.601 132.84 927.381 125.88 922.941 121.2C918.501 116.52 912.141 114.18 903.861 114.18C894.501 114.18 887.121 116.94 881.721 122.46C876.321 127.86 873.621 135.66 873.621 145.86V195H856.341V99.6H872.901V114C876.381 109.08 881.061 105.3 886.941 102.66C892.941 100.02 899.721 98.7 907.281 98.7ZM1056.61 147.84C1056.61 149.16 1056.49 150.9 1056.25 153.06H978.848C979.928 161.46 983.588 168.24 989.828 173.4C996.188 178.44 1004.05 180.96 1013.41 180.96C1024.81 180.96 1033.99 177.12 1040.95 169.44L1050.49 180.6C1046.17 185.64 1040.77 189.48 1034.29 192.12C1027.93 194.76 1020.79 196.08 1012.87 196.08C1002.79 196.08 993.848 194.04 986.048 189.96C978.248 185.76 972.188 179.94 967.868 172.5C963.668 165.06 961.568 156.66 961.568 147.3C961.568 138.06 963.608 129.72 967.688 122.28C971.888 114.84 977.588 109.08 984.788 105C992.108 100.8 1000.33 98.7 1009.45 98.7C1018.57 98.7 1026.67 100.8 1033.75 105C1040.95 109.08 1046.53 114.84 1050.49 122.28C1054.57 129.72 1056.61 138.24 1056.61 147.84ZM1009.45 113.28C1001.17 113.28 994.208 115.8 988.568 120.84C983.048 125.88 979.808 132.48 978.848 140.64H1040.05C1039.09 132.6 1035.79 126.06 1030.15 121.02C1024.63 115.86 1017.73 113.28 1009.45 113.28Z"
        fill={color}
      />
    </Icon>
  );
};
