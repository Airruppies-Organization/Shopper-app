import * as React from "react";
import Svg, { Path, Line } from "react-native-svg";
const Logo = ({
  width = 107,
  height = 27,
  textColor,
  mainColor,
  subColor,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 107 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M30.1753 14H28.1831L32.6289 3.52637H34.7163L39.2573 14H37.1699L35.9761 11.1436H32.4971L33.1636 9.45898H35.2729L33.625 5.52588L30.1753 14ZM42.2969 3.52637V5.06445H40.356V3.52637H42.2969ZM42.2969 6.30957V14H40.356V6.30957H42.2969ZM44.1353 14V6.30957H45.6367L45.8784 7.29102C46.5522 6.63672 47.2651 6.30957 48.0171 6.30957V7.87695C47.2944 7.87695 46.6475 8.17725 46.0762 8.77783V14H44.1353ZM52.5947 13.9854V3.52637H57.3555C59.4941 3.52637 60.5635 4.46143 60.5635 6.33154C60.5635 7.59619 59.731 8.64355 58.0659 9.47363L61.3838 14H58.9375L55.7515 9.43701V8.55078C57.6069 8.2334 58.5347 7.51318 58.5347 6.39014C58.5347 5.61865 58.1001 5.23291 57.231 5.23291H54.5723V13.9854H52.5947ZM69.0449 6.30957V14H67.5288L67.2944 13.0186C66.4106 13.6729 65.4731 14 64.4819 14C62.9097 14 62.1235 13.0698 62.1235 11.2095V6.30957H64.0645V11.1582C64.0645 12.0078 64.4355 12.4326 65.1777 12.4326C65.8076 12.4326 66.4497 12.1812 67.104 11.6782V6.30957H69.0449ZM72.8242 11.9932C73.3076 12.2568 73.8276 12.3887 74.3843 12.3887C75.5415 12.3887 76.1201 11.5757 76.1201 9.94971C76.1201 8.56787 75.4805 7.87695 74.2012 7.87695C73.6494 7.87695 73.1904 7.91113 72.8242 7.97949V11.9932ZM70.8833 6.62451C71.9038 6.41455 72.9829 6.30957 74.1206 6.30957C76.7329 6.30957 78.0391 7.52783 78.0391 9.96436C78.0391 12.6548 76.8232 14 74.3916 14C73.874 14 73.3516 13.8779 72.8242 13.6338V16.7832H70.8833V6.62451ZM81.4521 11.9932C81.9355 12.2568 82.4556 12.3887 83.0122 12.3887C84.1694 12.3887 84.748 11.5757 84.748 9.94971C84.748 8.56787 84.1084 7.87695 82.8291 7.87695C82.2773 7.87695 81.8184 7.91113 81.4521 7.97949V11.9932ZM79.5112 6.62451C80.5317 6.41455 81.6108 6.30957 82.7485 6.30957C85.3608 6.30957 86.667 7.52783 86.667 9.96436C86.667 12.6548 85.4512 14 83.0195 14C82.502 14 81.9795 13.8779 81.4521 13.6338V16.7832H79.5112V6.62451ZM90.0801 3.52637V5.06445H88.1392V3.52637H90.0801ZM90.0801 6.30957V14H88.1392V6.30957H90.0801ZM95.1631 6.30957C97.4971 6.30957 98.6641 7.50098 98.6641 9.88379C98.6641 10.2012 98.6421 10.5186 98.5981 10.8359H93.4932C93.4932 11.9199 94.2891 12.4619 95.8809 12.4619C96.6572 12.4619 97.4336 12.3887 98.21 12.2422V13.7803C97.5312 13.9268 96.7061 14 95.7344 14C92.9463 14 91.5522 12.689 91.5522 10.0669C91.5522 7.56201 92.7559 6.30957 95.1631 6.30957ZM93.4932 9.48828H96.7744V9.42969C96.7744 8.36523 96.2373 7.83301 95.1631 7.83301C94.1377 7.83301 93.5811 8.38477 93.4932 9.48828ZM100.122 13.6338V12.0225C100.976 12.3643 101.962 12.5352 103.081 12.5352C103.916 12.5352 104.333 12.2666 104.333 11.7295C104.333 11.2168 104.052 10.9604 103.491 10.9604H102.099C100.537 10.9604 99.7554 10.1914 99.7554 8.65332C99.7554 7.04199 100.896 6.23633 103.176 6.23633C104.143 6.23633 105.053 6.38281 105.908 6.67578V8.28711C105.053 7.94531 104.125 7.77441 103.125 7.77441C102.075 7.77441 101.55 8.04297 101.55 8.58008C101.55 9.09277 101.855 9.34912 102.465 9.34912H103.71C105.419 9.34912 106.274 10.1182 106.274 11.6562C106.274 13.2676 105.185 14.0732 103.007 14.0732C101.938 14.0732 100.976 13.9268 100.122 13.6338Z"
      fill={textColor}
    />
    <Path
      d="M28.4883 23.7656V22.8281C29.0482 23.0365 29.681 23.1406 30.3867 23.1406C31.2435 23.1406 31.6719 22.8542 31.6719 22.2812C31.6719 21.8646 31.4089 21.6562 30.8828 21.6562H30.0078C28.8646 21.6562 28.293 21.1354 28.293 20.0938C28.293 18.9479 29.1068 18.375 30.7344 18.375C31.3594 18.375 31.9518 18.4661 32.5117 18.6484V19.5859C31.9518 19.3776 31.3594 19.2734 30.7344 19.2734C29.7969 19.2734 29.3281 19.5469 29.3281 20.0938C29.3281 20.5104 29.5547 20.7188 30.0078 20.7188H30.8828C32.099 20.7188 32.707 21.2396 32.707 22.2812C32.707 23.4531 31.9336 24.0391 30.3867 24.0391C29.681 24.0391 29.0482 23.9479 28.4883 23.7656ZM36.5156 23.8828C36.1771 23.9609 35.8255 24 35.4609 24C34.0026 24 33.2734 23.2904 33.2734 21.8711C33.2734 20.556 34.0026 19.8984 35.4609 19.8984C35.8255 19.8984 36.1771 19.9375 36.5156 20.0156V20.8359C36.1771 20.7578 35.8516 20.7188 35.5391 20.7188C34.7188 20.7188 34.3086 21.1029 34.3086 21.8711C34.3086 22.7435 34.7188 23.1797 35.5391 23.1797C35.8516 23.1797 36.1771 23.1406 36.5156 23.0625V23.8828ZM37.0039 22.7227C37.0039 21.9076 37.5977 21.5 38.7852 21.5C39.0638 21.5 39.3424 21.526 39.6211 21.5781V21.2695C39.6211 20.9023 39.3568 20.7188 38.8281 20.7188C38.3802 20.7188 37.8828 20.7839 37.3359 20.9141V20.0938C37.8828 19.9635 38.3802 19.8984 38.8281 19.8984C40.0469 19.8984 40.6562 20.349 40.6562 21.25V24H40.0547L39.6875 23.6328C39.3307 23.8776 38.9375 24 38.5078 24C37.5052 24 37.0039 23.5742 37.0039 22.7227ZM39.6211 22.2812C39.3607 22.2292 39.082 22.2031 38.7852 22.2031C38.2878 22.2031 38.0391 22.3724 38.0391 22.7109C38.0391 23.0755 38.2474 23.2578 38.6641 23.2578C39.0078 23.2578 39.3268 23.151 39.6211 22.9375V22.2812ZM41.6367 24V19.8984H42.4375L42.5664 20.5C42.9596 20.099 43.4076 19.8984 43.9102 19.8984C44.8815 19.8984 45.3672 20.4036 45.3672 21.4141V24H44.332V21.4141C44.332 20.9609 44.1068 20.7344 43.6562 20.7344C43.3203 20.7344 42.9922 20.8685 42.6719 21.1367V24H41.6367ZM47.9102 22.7227C47.9102 21.9076 48.5039 21.5 49.6914 21.5C49.9701 21.5 50.2487 21.526 50.5273 21.5781V21.2695C50.5273 20.9023 50.263 20.7188 49.7344 20.7188C49.2865 20.7188 48.7891 20.7839 48.2422 20.9141V20.0938C48.7891 19.9635 49.2865 19.8984 49.7344 19.8984C50.9531 19.8984 51.5625 20.349 51.5625 21.25V24H50.9609L50.5938 23.6328C50.237 23.8776 49.8438 24 49.4141 24C48.4115 24 47.9102 23.5742 47.9102 22.7227ZM50.5273 22.2812C50.2669 22.2292 49.9883 22.2031 49.6914 22.2031C49.194 22.2031 48.9453 22.3724 48.9453 22.7109C48.9453 23.0755 49.1536 23.2578 49.5703 23.2578C49.9141 23.2578 50.2331 23.151 50.5273 22.9375V22.2812ZM52.543 24V19.8984H53.3438L53.4727 20.5C53.8659 20.099 54.3138 19.8984 54.8164 19.8984C55.7878 19.8984 56.2734 20.4036 56.2734 21.4141V24H55.2383V21.4141C55.2383 20.9609 55.013 20.7344 54.5625 20.7344C54.2266 20.7344 53.8984 20.8685 53.5781 21.1367V24H52.543ZM59.8516 20.9688C59.638 20.8281 59.3698 20.7578 59.0469 20.7578C58.4036 20.7578 58.082 21.1185 58.082 21.8398C58.082 22.6966 58.4167 23.125 59.0859 23.125C59.3568 23.125 59.612 23.0872 59.8516 23.0117V20.9688ZM60.8867 23.7539C60.2591 23.918 59.6458 24 59.0469 24C57.7214 24 57.0586 23.2891 57.0586 21.8672C57.0586 20.5547 57.707 19.8984 59.0039 19.8984C59.2799 19.8984 59.5625 19.9635 59.8516 20.0938V18.4141H60.8867V23.7539ZM66.2461 20.8281C66.0768 20.7656 65.8359 20.7344 65.5234 20.7344C64.8073 20.7344 64.4492 21.1289 64.4492 21.918C64.4492 22.681 64.7578 23.0625 65.375 23.0625C65.6719 23.0625 65.9622 22.9922 66.2461 22.8516V20.8281ZM67.2812 23.6875C67.2812 24.8854 66.5612 25.4844 65.1211 25.4844C64.6159 25.4844 64.168 25.4193 63.7773 25.2891V24.4688C64.1758 24.599 64.6263 24.6641 65.1289 24.6641C65.8737 24.6641 66.2461 24.3516 66.2461 23.7266C65.9388 23.8568 65.6081 23.9219 65.2539 23.9219C64.0352 23.9219 63.4258 23.2565 63.4258 21.9258C63.4258 20.5742 64.1354 19.8984 65.5547 19.8984C66.0312 19.8984 66.6068 19.9544 67.2812 20.0664V23.6875ZM69.1016 21.9336C69.1016 22.7904 69.4336 23.2188 70.0977 23.2188C70.7617 23.2188 71.0938 22.7904 71.0938 21.9336C71.0938 21.0977 70.7617 20.6797 70.0977 20.6797C69.4336 20.6797 69.1016 21.0977 69.1016 21.9336ZM68.0664 21.9492C68.0664 20.5742 68.7435 19.8867 70.0977 19.8867C71.4518 19.8867 72.1289 20.5742 72.1289 21.9492C72.1289 23.3216 71.4518 24.0078 70.0977 24.0078C68.7487 24.0078 68.0716 23.3216 68.0664 21.9492Z"
      fill={textColor}
    />
    <Line
      x1={23.25}
      y1={-1.09278e-8}
      x2={23.25}
      y2={26}
      stroke={mainColor}
      strokeWidth={0.5}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.46246 7.07205C3.46246 6.55588 3.46246 6.03963 3.46246 5.52346C3.56764 5.54277 3.64911 5.51563 3.70688 5.44195C5.51199 5.00753 7.23644 4.3555 8.8804 3.48584C10.6747 4.39617 12.5349 5.10249 14.4613 5.60496C14.4153 7.0489 14.293 8.48884 14.0947 9.92471C13.9478 11.9437 13.1195 13.6145 11.6097 14.9373C10.8115 15.6217 9.96953 16.2466 9.08408 16.8119C8.97548 16.8662 8.86679 16.8662 8.75819 16.8119C7.16409 15.924 5.81979 14.7422 4.72529 13.2664C4.09127 11.9251 3.71111 10.5124 3.58467 9.02816C3.5014 8.37857 3.46067 7.72653 3.46246 7.07205ZM8.83966 5.76797C7.75412 8.16918 6.6135 10.5463 5.41781 12.8996C5.79804 12.954 6.17819 12.954 6.55842 12.8996C6.77571 12.4377 6.99292 11.9759 7.21021 11.5141C8.3237 11.4597 9.4371 11.4597 10.5506 11.5141C10.7679 11.9759 10.9851 12.4377 11.2024 12.8996C11.5826 12.954 11.9628 12.954 12.343 12.8996C11.204 10.4987 10.0363 8.12142 8.83966 5.76797Z"
      fill={mainColor}
    />
    <Path
      d="M12.3432 12.8997C11.2042 10.4988 10.0364 8.12151 8.83983 5.76807C7.75428 8.16928 6.61366 10.5464 5.41797 12.8997C5.7982 12.9541 6.17835 12.9541 6.55859 12.8997C6.77588 12.4378 6.99308 11.976 7.21037 11.5141C8.32386 11.4598 9.43727 11.4598 10.5508 11.5141C10.768 11.976 10.9852 12.4378 11.2025 12.8997C11.5828 12.9541 11.9629 12.9541 12.3432 12.8997Z"
      fill={subColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.42559 13.9183C1.43154 14.0428 1.3772 14.1243 1.26265 14.1628C1.08829 13.9835 0.966086 13.7662 0.896019 13.5108C0.786601 14.5678 1.04463 15.5187 1.67001 16.3635C1.67001 16.4721 1.61567 16.5265 1.50707 16.5265C0.719712 15.6827 0.366691 14.6774 0.447919 13.5108C0.435454 12.849 0.50332 12.1969 0.651601 11.5547C0.853246 12.3635 1.11127 13.1514 1.42559 13.9183Z"
      fill={mainColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8239 15.956C16.7153 15.956 16.661 15.9017 16.661 15.793C16.832 15.2907 16.9407 14.7745 16.9869 14.2444C17.0796 14.0159 17.0932 13.7714 17.0276 13.5109C16.9858 13.5946 16.9451 13.6761 16.9054 13.7554C16.2241 15.186 15.2735 16.4221 14.0539 17.4639C12.9133 18.1974 11.7726 18.9309 10.632 19.6645C9.98439 20.1356 9.46842 20.7196 9.08403 21.4168C9.15997 21.6039 9.22783 21.7941 9.28772 21.9874C9.74559 21.4472 10.2752 20.999 10.8764 20.6425C11.9254 20.0771 12.9845 19.5337 14.0539 19.0124C15.1295 18.33 16.0257 17.4742 16.7425 16.445C16.82 16.5607 16.8471 16.6965 16.8239 16.8526C16.8338 18.6412 16.0191 19.8773 14.3798 20.561C13.4188 20.7314 12.5497 21.0981 11.7726 21.6613C11.7044 21.6335 11.6771 21.5792 11.6912 21.4983C11.8997 21.2572 12.1442 21.0535 12.4244 20.8871C12.9978 20.6053 13.5953 20.3879 14.2168 20.235C15.4208 19.7378 16.1405 18.8549 16.3758 17.5861C15.727 18.2628 15.0073 18.847 14.2168 19.3385C13.0762 19.9361 11.9356 20.5339 10.795 21.1316C9.83644 21.7184 9.239 22.5606 9.00256 23.6582C8.94912 24.2192 9.07132 24.749 9.36919 25.2476C9.86943 25.7377 10.399 25.7513 10.9579 25.2883C11.1204 25.1124 11.229 24.9087 11.2838 24.677C11.3381 24.514 11.3924 24.351 11.4467 24.188C11.5079 25.6328 10.829 26.1626 9.40993 25.7773C9.17594 25.5706 8.97225 25.3397 8.79888 25.0845C8.3806 25.8903 7.74234 26.1212 6.88427 25.7773C6.29327 25.3968 6.07598 24.867 6.23249 24.188C6.28683 24.351 6.34109 24.514 6.39543 24.677C6.64849 25.3608 7.13732 25.646 7.86194 25.5328C8.45955 25.128 8.73109 24.5575 8.67667 23.8212C8.68083 22.9603 8.35493 22.2539 7.699 21.7021C7.39616 21.4262 7.07027 21.1817 6.72132 20.9686C5.54038 20.3372 4.37263 19.6852 3.21799 19.0124C2.57835 18.5488 2.00804 18.0191 1.50707 17.4231C1.48401 17.3588 1.44327 17.3044 1.38486 17.2601C1.32253 17.3877 1.33614 17.4964 1.42559 17.5861C1.66879 18.8213 2.37491 19.6771 3.54389 20.1535C4.19502 20.3297 4.81959 20.5742 5.41776 20.8871C5.59032 20.9726 5.72605 21.0948 5.82512 21.2538C5.83914 21.3347 5.81192 21.389 5.74365 21.4168C5.00877 20.9858 4.22125 20.6734 3.38094 20.4795C1.85243 19.8001 1.06483 18.6183 1.01823 16.9341C0.9933 16.6989 1.02043 16.4816 1.0997 16.282C1.76151 17.3109 2.60336 18.1667 3.62536 18.8494C4.76598 19.4743 5.9066 20.0991 7.04721 20.724C7.54485 21.0721 8.00648 21.4661 8.43225 21.9059C8.52171 21.7321 8.60318 21.5556 8.67667 21.3761C8.3067 20.7609 7.845 20.2176 7.29163 19.746C6.47169 19.1705 5.62975 18.6272 4.76598 18.1159C3.26525 17.0902 2.09742 15.7726 1.26265 14.1629C1.3772 14.1244 1.43154 14.0429 1.42559 13.9184C2.12707 15.1127 2.99614 16.1859 4.03272 17.1378C5.14621 17.8714 6.25962 18.6049 7.37311 19.3385C7.99148 19.7939 8.49385 20.3508 8.88035 21.0093C9.21219 20.4055 9.66029 19.9029 10.2247 19.5015C11.3163 18.7629 12.4298 18.0566 13.565 17.3824C15.404 15.8903 16.6397 14.0022 17.272 11.7178C17.5271 12.8326 17.5271 13.9464 17.272 15.0595C17.1631 15.3861 17.0138 15.6849 16.8239 15.956ZM8.92109 21.9874C9.03222 22.2404 9.01869 22.4849 8.88035 22.7209C8.76833 22.5223 8.72759 22.305 8.75814 22.0689C8.81249 22.0417 8.86675 22.0145 8.92109 21.9874Z"
      fill={mainColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6438 10.6991C15.5701 10.7569 15.543 10.8384 15.5623 10.9436C15.5623 10.9708 15.5623 10.998 15.5623 11.0251C15.4651 11.2264 15.4244 11.4437 15.4401 11.6772C15.5327 11.4944 15.6006 11.3042 15.6438 11.1066C15.6438 11.0523 15.6438 10.998 15.6438 10.9436C15.6981 10.9436 15.7253 10.9165 15.7253 10.8621C15.8331 10.3345 15.9825 9.81837 16.1734 9.31353C16.6104 10.304 16.7733 11.3364 16.6622 12.4107C16.6083 12.6798 16.5133 12.9244 16.377 13.1443C16.3034 13.0865 16.2763 13.005 16.2956 12.8997C16.4011 12.2483 16.4011 11.5962 16.2956 10.9436C16.2522 10.7024 16.1979 10.6752 16.1326 10.8621C15.496 13.1412 14.4504 15.206 12.9959 17.0565C12.5857 17.4805 12.1647 17.8881 11.7331 18.279C11.6523 18.2931 11.598 18.2658 11.5701 18.1975C11.9437 17.6961 12.3375 17.2071 12.7515 16.7305C12.9626 16.443 13.1255 16.1441 13.2403 15.8339C12.0616 17.0136 10.7445 18.0052 9.2889 18.8088C9.07162 18.8632 8.85441 18.8632 8.63712 18.8088C7.20898 18.0326 5.91903 17.0681 4.76716 15.9154C4.71282 15.9698 4.71282 16.0241 4.76716 16.0784C5.12002 16.6074 5.48665 17.1236 5.86705 17.627C5.8624 17.7174 5.83527 17.7989 5.78557 17.8715C5.29592 17.4766 4.87495 17.0147 4.52275 16.4859C3.29813 14.7148 2.40193 12.7858 1.83414 10.6991C1.5938 11.3354 1.52593 11.9875 1.63046 12.6552C1.64977 12.7604 1.62264 12.8419 1.54899 12.8997C1.45937 12.7549 1.39142 12.5919 1.34531 12.4107C1.2112 11.2906 1.40136 10.231 1.91562 9.23202C1.95497 9.30929 1.96849 9.3908 1.95635 9.47654C1.94234 9.55739 1.96955 9.61167 2.03783 9.63955C2.03783 9.69391 2.03783 9.74819 2.03783 9.80256C2.05306 9.97078 2.0938 10.1338 2.16004 10.2916C2.22432 10.1113 2.21071 9.94829 2.1193 9.80256C2.1193 9.74819 2.1193 9.69391 2.1193 9.63955C2.14333 9.45738 2.11612 9.29438 2.03783 9.15052C1.85745 7.59875 1.84392 6.05016 1.99709 4.50475C4.31988 4.05615 6.53325 3.28186 8.63712 2.18187C8.85441 2.12753 9.07162 2.12753 9.2889 2.18187C11.3989 3.29278 13.6123 4.09421 15.9289 4.58626C16.0439 6.63569 15.9488 8.67331 15.6438 10.6991ZM8.80007 2.71165C10.1729 3.3372 11.5714 3.90773 12.9959 4.42325C13.7862 4.6447 14.5874 4.8077 15.3994 4.91228C15.5052 7.36361 15.2744 9.78153 14.7068 12.1662C14.3833 13.3844 13.7858 14.444 12.9144 15.3449C11.7353 16.5117 10.4181 17.4898 8.96301 18.279C7.13713 17.3037 5.54841 16.0268 4.19686 14.4483C3.37031 13.0718 2.88148 11.5776 2.73035 9.96557C2.51355 8.2882 2.41847 6.60374 2.44519 4.91228C4.71478 4.5993 6.83307 3.86575 8.80007 2.71165Z"
      fill={mainColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0619 10.4138C9.27433 10.5225 8.48682 10.5225 7.69922 10.4138C8.07106 9.53405 8.46482 8.66464 8.88057 7.80566C9.31368 8.65706 9.70744 9.52647 10.0619 10.4138Z"
      fill={mainColor}
    />
  </Svg>
);
export default Logo;
