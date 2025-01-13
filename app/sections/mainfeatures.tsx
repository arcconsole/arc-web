import Image from "next/image";
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Mainfeatures = () => {
  const features: FeatureProps[] = [
    {
      icon: <DeviceSVG />,
      title: "Remote Play",
      description: "Your PC/PS/XBOX",
    },
    {
      icon: <ScreenSVG />,
      title: '7" 1080P Screen',
      description: "16:9",
    },
    {
      icon: <BatterySVG />,
      title: "12 HRS",
      description: "Battery Life",
    },
    {
      icon: <JoystickSVG />,
      title: "Hall Sensor",
      description: "Joysticks",
    },
    {
      icon: <WeightSVG />,
      title: "Lightweight",
      description: "430g",
    },
    {
      icon: <GyroSVG />,
      title: "Gyro",
      description: "Supported",
    },
  ];

  return (
    <div className="flex flex-col gap-12 w-full min-h-screen justify-center items-center">
      <Image
        src="/bigfeature.webp"
        alt="Features Image"
        width={1000}
        height={1000}
        draggable={false}
        className=" w-full max-w-5xl"
      />
      <div className="flex max-sm:flex-wrap gap-8 mt-24 text-white justify-center items-center w-full md:max-w-4xl p-8 text-sm">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-center w-1/6 sm:w-1/3 lg:w-1/6"
          >
            {feature.icon}

            <div className="flex flex-col text-xs text-center">
              <h2 className="font-bold">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainfeatures;

function DeviceSVG() {
  return (
    <svg
      width="73"
      height="49"
      viewBox="0 0 73 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.369 11.6983C43.6381 11.6983 43.8563 11.4801 43.8563 11.2109C43.8563 10.9418 43.6381 10.7236 43.369 10.7236V11.6983ZM24.3633 11.6983H27.0784V10.7236H24.3633V11.6983ZM27.9834 11.6983H33.4136V10.7236H27.9834V11.6983ZM34.3186 11.6983H39.7488V10.7236H34.3186V11.6983ZM40.6539 11.6983H43.369V10.7236H40.6539V11.6983Z"
        fill="#FFFCFC"
      />
      <path
        d="M24.3627 12.6719V28.2663C23.8754 30.2156 20.9514 31.1902 19.4894 28.2663V23.8804C19.4894 22.4184 15.5908 20.9564 15.1035 23.8804V31.1902"
        stroke="#FFFCFC"
        stroke-width="0.974651"
      />
      <rect
        x="43.8555"
        y="0.974651"
        width="27.2902"
        height="46.7832"
        rx="0.974651"
        stroke="white"
        stroke-width="1.9493"
      />
      <rect
        x="1.45803"
        y="31.6748"
        width="34.1128"
        height="16.5691"
        rx="8.28453"
        stroke="white"
        stroke-width="0.974651"
      />
      <circle cx="12.1808" cy="39.4738" r="3.41128" fill="#D9D9D9" />
      <circle cx="57.5021" cy="38.0099" r="2.92395" fill="white" />
      <circle cx="57.5" cy="32.1622" r="0.974651" fill="white" />
      <circle cx="28.2598" cy="38.0118" r="1.9493" fill="white" />
      <circle cx="22.8995" cy="42.3956" r="1.46198" fill="white" />
      <path
        d="M49.2148 7.30859H65.7839"
        stroke="#FFFCFC"
        stroke-width="1.9493"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.2148 14.1328H65.7839"
        stroke="#FFFCFC"
        stroke-width="1.9493"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="49.2178"
        y="19.0069"
        width="16.5691"
        height="7.7972"
        stroke="#FFFCFC"
        stroke-width="0.974651"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ScreenSVG() {
  return (
    <svg
      width="59"
      height="38"
      viewBox="0 0 59 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.16801"
        y="1.82231"
        width="56.5297"
        height="35.0874"
        rx="1.9493"
        stroke="white"
        stroke-width="1.9493"
      />
      <path
        d="M6.04102 22.2891V32.0356C6.04102 32.5739 6.47738 33.0102 7.01567 33.0102H16.7622"
        stroke="#FFFCFC"
        stroke-width="1.9493"
        stroke-linecap="round"
      />
      <path
        d="M53.8008 16.4414V6.6949C53.8008 6.15662 53.3644 5.72025 52.8261 5.72025H43.0796"
        stroke="#FFFCFC"
        stroke-width="1.9493"
        stroke-linecap="round"
      />
      <path
        d="M20.7907 24.6211H18.7319V18.9845C18.7319 18.829 18.7341 18.638 18.7386 18.4115C18.743 18.1805 18.7497 17.9451 18.7586 17.7053C18.7674 17.461 18.7763 17.2411 18.7852 17.0457C18.7364 17.1034 18.6364 17.2033 18.4854 17.3455C18.3388 17.4832 18.2011 17.6075 18.0723 17.7186L16.953 18.618L15.9602 17.3788L19.0984 14.8803H20.7907V24.6211ZM23.4424 20.4836C23.4424 19.9239 23.4824 19.3709 23.5623 18.8246C23.6467 18.2738 23.7911 17.7563 23.9954 17.2722C24.1997 16.7836 24.4862 16.3527 24.8549 15.9796C25.2236 15.6021 25.6922 15.3067 26.2607 15.0935C26.8293 14.8759 27.5177 14.767 28.3261 14.767C28.5171 14.767 28.7392 14.7759 28.9924 14.7937C29.25 14.807 29.4632 14.8314 29.632 14.867V16.5126C29.4543 16.4727 29.2633 16.4416 29.059 16.4194C28.8591 16.3927 28.6593 16.3794 28.4594 16.3794C27.651 16.3794 27.0247 16.5082 26.5805 16.7658C26.1408 17.0235 25.8299 17.381 25.6477 17.8385C25.4701 18.2916 25.3657 18.8201 25.3346 19.4242H25.4212C25.5456 19.2066 25.701 19.0134 25.8876 18.8446C26.0786 18.6758 26.3096 18.5425 26.5805 18.4448C26.8515 18.3427 27.169 18.2916 27.5333 18.2916C28.1018 18.2916 28.5949 18.4137 29.0124 18.658C29.4299 18.8979 29.7519 19.2466 29.9785 19.7041C30.205 20.1616 30.3183 20.719 30.3183 21.3764C30.3183 22.0782 30.1828 22.6823 29.9118 23.1886C29.6409 23.695 29.2567 24.0836 28.7592 24.3546C28.2662 24.6211 27.6799 24.7543 27.0003 24.7543C26.5028 24.7543 26.0386 24.67 25.6078 24.5012C25.1769 24.3279 24.7994 24.0659 24.4751 23.715C24.1509 23.3641 23.8977 22.9221 23.7156 22.3891C23.5335 21.8517 23.4424 21.2165 23.4424 20.4836ZM26.9603 23.1087C27.3645 23.1087 27.6932 22.971 27.9464 22.6956C28.1995 22.4202 28.3261 21.9893 28.3261 21.403C28.3261 20.9278 28.2151 20.5547 27.993 20.2837C27.7753 20.0083 27.4444 19.8706 27.0003 19.8706C26.6982 19.8706 26.4317 19.9395 26.2007 20.0772C25.9742 20.2104 25.7988 20.3814 25.6744 20.5902C25.55 20.7945 25.4878 21.0055 25.4878 21.2231C25.4878 21.4497 25.5189 21.674 25.5811 21.8961C25.6433 22.1182 25.7366 22.3203 25.8609 22.5024C25.9853 22.6845 26.1386 22.8311 26.3207 22.9421C26.5072 23.0532 26.7204 23.1087 26.9603 23.1087ZM31.5508 23.6683C31.5508 23.2508 31.6641 22.9577 31.8906 22.7889C32.1216 22.6201 32.3992 22.5357 32.7235 22.5357C33.0388 22.5357 33.3098 22.6201 33.5363 22.7889C33.7673 22.9577 33.8828 23.2508 33.8828 23.6683C33.8828 24.0681 33.7673 24.3568 33.5363 24.5345C33.3098 24.7121 33.0388 24.801 32.7235 24.801C32.3992 24.801 32.1216 24.7121 31.8906 24.5345C31.6641 24.3568 31.5508 24.0681 31.5508 23.6683ZM31.5508 18.165C31.5508 17.7475 31.6641 17.4543 31.8906 17.2855C32.1216 17.1167 32.3992 17.0323 32.7235 17.0323C33.0388 17.0323 33.3098 17.1167 33.5363 17.2855C33.7673 17.4543 33.8828 17.7475 33.8828 18.165ZM41.9779 19.0378C41.9779 19.5975 41.9357 20.1527 41.8513 20.7035C41.7714 21.2542 41.6292 21.7739 41.4249 22.2625C41.2206 22.7467 40.9341 23.1775 40.5654 23.5551C40.1967 23.9282 39.7281 24.2213 39.1596 24.4345C38.5911 24.6477 37.9026 24.7543 37.0942 24.7543C36.9032 24.7543 36.6789 24.7455 36.4212 24.7277C36.1636 24.7144 35.9504 24.6922 35.7816 24.6611V23.0087C35.9593 23.0532 36.1481 23.0887 36.348 23.1153C36.5478 23.1375 36.7499 23.1486 36.9543 23.1486C37.7671 23.1486 38.3934 23.0198 38.8331 22.7622C39.2773 22.5046 39.5882 22.147 39.7659 21.6895C39.948 21.232 40.0524 20.7035 40.079 20.1038H39.9991C39.8703 20.317 39.717 20.5102 39.5394 20.6835C39.3661 20.8523 39.1441 20.9877 38.8731 21.0899C38.6022 21.1876 38.2579 21.2365 37.8404 21.2365C37.2852 21.2365 36.801 21.1165 36.3879 20.8767C35.9793 20.6324 35.6617 20.2815 35.4352 19.824C35.2131 19.362 35.102 18.8046 35.102 18.1517C35.102 17.4454 35.2353 16.8413 35.5018 16.3394C35.7727 15.8331 36.157 15.4444 36.6544 15.1735C37.1519 14.9025 37.7382 14.767 38.4134 14.767C38.9109 14.767 39.375 14.8536 39.8059 15.0269C40.2367 15.1957 40.6143 15.4555 40.9385 15.8064C41.2672 16.1573 41.5226 16.6015 41.7047 17.1389C41.8868 17.6764 41.9779 18.3093 41.9779 19.0378ZM38.4534 16.4194C38.0536 16.4194 37.7271 16.5571 37.4739 16.8325C37.2208 17.1078 37.0942 17.5387 37.0942 18.125C37.0942 18.5958 37.203 18.9689 37.4206 19.2443C37.6383 19.5197 37.9692 19.6574 38.4134 19.6574C38.7199 19.6574 38.9864 19.5908 39.2129 19.4575C39.4394 19.3198 39.6149 19.1488 39.7392 18.9445C39.8681 18.7358 39.9325 18.5225 39.9325 18.3049C39.9325 18.0784 39.9014 17.8541 39.8392 17.632C39.777 17.4099 39.6837 17.2078 39.5594 17.0257C39.435 16.8436 39.2795 16.697 39.093 16.5859C38.9109 16.4749 38.6977 16.4194 38.4534 16.4194Z"
        fill="white"
      />
    </svg>
  );
}

function BatterySVG() {
  return (
    <svg
      width="66"
      height="30"
      viewBox="0 0 66 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.938143"
        y="1.38736"
        width="55.9237"
        height="27.9619"
        rx="3.91466"
        stroke="white"
        stroke-width="1.11847"
      />
      <rect
        x="47.4805"
        y="6.42188"
        width="6.71084"
        height="19.0141"
        fill="white"
      />
      <rect
        x="57.0371"
        y="6.42188"
        width="8.94779"
        height="19.0141"
        rx="1.11847"
        fill="white"
      />
      <rect
        x="3.11133"
        y="6.42188"
        width="6.71084"
        height="19.0141"
        fill="white"
      />
      <path
        d="M15.4581 20.6562H13.7936V16.099C13.7936 15.9733 13.7954 15.8189 13.799 15.6357C13.8026 15.449 13.808 15.2586 13.8152 15.0647C13.8223 14.8672 13.8295 14.6894 13.8367 14.5314C13.7972 14.5781 13.7164 14.6589 13.5943 14.7738C13.4758 14.8852 13.3645 14.9857 13.2603 15.0755L12.3553 15.8027L11.5527 14.8008L14.0899 12.7807H15.4581V20.6562ZM23.1613 20.6562H17.656V19.4981L19.6329 17.4996C20.0316 17.0902 20.3512 16.749 20.5918 16.4761C20.836 16.1995 21.012 15.9482 21.1197 15.7219C21.231 15.4957 21.2867 15.2533 21.2867 14.9947C21.2867 14.6823 21.1987 14.4488 21.0227 14.2944C20.8504 14.1364 20.6187 14.0574 20.3278 14.0574C20.0226 14.0574 19.7263 14.1274 19.439 14.2675C19.1517 14.4075 18.8518 14.6068 18.5394 14.8654L17.6344 13.7934C17.8607 13.5995 18.0995 13.4164 18.3509 13.244C18.6058 13.0716 18.9003 12.9333 19.2343 12.8292C19.5719 12.7215 19.9759 12.6676 20.4463 12.6676C20.9635 12.6676 21.407 12.761 21.7769 12.9477C22.1504 13.1344 22.4377 13.3894 22.6388 13.7126C22.8399 14.0322 22.9404 14.395 22.9404 14.8008C22.9404 15.2353 22.8543 15.6321 22.6819 15.9913C22.5095 16.3504 22.2581 16.7059 21.9277 17.0578C21.6009 17.4098 21.2059 17.7994 20.7426 18.2268L19.7299 19.1803V19.2557H23.1613V20.6562ZM30.9722 20.6562H29.3077V17.2572H26.1887V20.6562H24.5188V12.7807H26.1887V15.8674H29.3077V12.7807H30.9722V20.6562ZM35.2601 12.7807C35.9748 12.7807 36.5637 12.8669 37.027 13.0393C37.4939 13.2117 37.8404 13.472 38.0667 13.8204C38.2929 14.1687 38.406 14.6086 38.406 15.1401C38.406 15.4993 38.3378 15.8135 38.2013 16.0828C38.0649 16.3522 37.8853 16.5802 37.6626 16.767C37.44 16.9537 37.1994 17.1063 36.9408 17.2248L39.2571 20.6562H37.4041L35.5241 17.6342H34.6352V20.6562H32.9653V12.7807H35.2601ZM35.1416 14.149H34.6352V16.2768H35.1739C35.727 16.2768 36.122 16.1852 36.359 16.002C36.5996 15.8153 36.72 15.5424 36.72 15.1832C36.72 14.8097 36.5907 14.544 36.3321 14.386C36.0771 14.228 35.6803 14.149 35.1416 14.149ZM44.8972 18.4692C44.8972 18.9361 44.784 19.3419 44.5578 19.6866C44.3315 20.0314 44.0011 20.2971 43.5666 20.4839C43.1357 20.6706 42.6113 20.764 41.9937 20.764C41.7207 20.764 41.4532 20.746 41.191 20.7101C40.9325 20.6742 40.6829 20.6221 40.4422 20.5539C40.2052 20.4821 39.979 20.3941 39.7635 20.2899V18.7385C40.137 18.9037 40.5248 19.0528 40.9271 19.1856C41.3293 19.3185 41.7279 19.385 42.1229 19.385C42.3959 19.385 42.6149 19.349 42.7801 19.2772C42.9489 19.2054 43.071 19.1066 43.1464 18.9809C43.2219 18.8553 43.2596 18.7116 43.2596 18.55C43.2596 18.3525 43.1931 18.1837 43.0602 18.0436C42.9274 17.9036 42.7442 17.7725 42.5108 17.6504C42.281 17.5283 42.0206 17.3972 41.7297 17.2572C41.5465 17.171 41.3472 17.0668 41.1318 16.9447C40.9163 16.819 40.7116 16.6664 40.5177 16.4868C40.3237 16.3073 40.1639 16.09 40.0382 15.835C39.9161 15.5765 39.8551 15.2676 39.8551 14.9085C39.8551 14.4381 39.9628 14.0358 40.1783 13.7019C40.3938 13.3679 40.7008 13.1129 41.0994 12.9369C41.5017 12.7574 41.9757 12.6676 42.5216 12.6676C42.931 12.6676 43.3206 12.7161 43.6905 12.813C44.064 12.9064 44.4536 13.0429 44.8594 13.2224L44.3208 14.5207C43.9581 14.3734 43.633 14.2603 43.3457 14.1813C43.0585 14.0987 42.7658 14.0574 42.4677 14.0574C42.2594 14.0574 42.0816 14.0915 41.9344 14.1597C41.7872 14.2244 41.6758 14.3177 41.6004 14.4399C41.525 14.5584 41.4873 14.6966 41.4873 14.8546C41.4873 15.0414 41.5412 15.1994 41.6489 15.3287C41.7602 15.4544 41.9254 15.5765 42.1445 15.695C42.3671 15.8135 42.6437 15.9518 42.9741 16.1098C43.3763 16.3001 43.7192 16.4994 44.0029 16.7077C44.2902 16.9124 44.5111 17.1548 44.6655 17.4349C44.8199 17.7115 44.8972 18.0562 44.8972 18.4692Z"
        fill="white"
      />
    </svg>
  );
}

function JoystickSVG() {
  return (
    <svg
      width="28"
      height="38"
      viewBox="0 0 28 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.07522"
        y="28.624"
        width="26.3156"
        height="8.77186"
        stroke="white"
        stroke-width="0.974651"
      />
      <rect
        x="1.07522"
        y="28.624"
        width="26.3156"
        height="8.77186"
        stroke="white"
        stroke-width="0.974651"
      />
      <path
        d="M1.28678 27.6508L4.33897 19.3662H24.127L27.1792 27.6508H1.28678Z"
        stroke="white"
        stroke-width="0.974651"
      />
      <circle
        cx="17.1566"
        cy="8.64486"
        r="6.82255"
        stroke="white"
        stroke-width="1.9493"
      />
      <path
        d="M18.6205 23.753C18.6205 24.4193 18.135 24.9061 17.2818 25.2481C16.4439 25.5839 15.4139 25.7025 14.7219 25.7025C13.0422 25.7025 12.0614 25.4586 11.5113 25.1086C11.0109 24.7901 10.8233 24.3552 10.8233 23.753C10.8233 23.5881 10.92 23.375 11.2074 23.1201C11.4894 22.8702 11.8952 22.6356 12.3587 22.4328C13.2976 22.0221 14.3251 21.8037 14.7218 21.8037C15.16 21.8038 16.1972 21.9195 17.109 22.262C18.065 22.6211 18.6205 23.1201 18.6205 23.753Z"
        stroke="white"
        stroke-width="0.974651"
      />
      <path
        d="M15.6954 16.4414L14.7207 23.7513"
        stroke="#FFFCFC"
        stroke-width="1.9493"
        stroke-linecap="round"
      />
    </svg>
  );
}

function WeightSVG() {
  return (
    <svg
      width="34"
      height="40"
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.47968 14.0645L27.2441 14.0645L32.2149 38.9181H1.41273L5.47968 14.0645Z"
        stroke="white"
        stroke-width="1.9493"
      />
      <path
        d="M24.6335 9.6781C24.6335 10.7583 24.4151 11.5121 24.0862 12.0529C23.7607 12.5879 23.282 12.9887 22.6296 13.2906C21.263 13.923 19.2784 14.064 16.8363 14.064C14.3942 14.064 12.4096 13.923 11.043 13.2906C10.3906 12.9887 9.91192 12.5879 9.58646 12.0529C9.25747 11.5121 9.0391 10.7583 9.0391 9.6781C9.0391 5.37183 12.53 1.8809 16.8363 1.8809C21.1426 1.8809 24.6335 5.37183 24.6335 9.6781Z"
        stroke="white"
        stroke-width="1.9493"
      />
      <circle
        cx="16.8342"
        cy="9.67794"
        r="3.8986"
        stroke="white"
        stroke-width="1.9493"
      />
      <path
        d="M10.5057 33.8511H9.67954V35.2734H8.2619V33.8511H5.33276V32.8419L8.34171 28.4106H9.67954V32.7245H10.5057V33.8511ZM8.2619 32.7245V31.5604C8.2619 31.4508 8.26347 31.321 8.2666 31.1708C8.27286 31.0205 8.27912 30.8703 8.28538 30.7201C8.29163 30.5699 8.29789 30.4369 8.30415 30.3211C8.31354 30.2022 8.3198 30.1193 8.32293 30.0723H8.28538C8.22592 30.2006 8.16333 30.3258 8.09761 30.4479C8.03189 30.5668 7.95522 30.692 7.8676 30.8234L6.60957 32.7245H8.2619ZM15.5848 29.9456C15.5848 30.2617 15.519 30.5355 15.3876 30.7671C15.2562 30.9986 15.0778 31.188 14.8525 31.3351C14.6303 31.4821 14.3799 31.5901 14.1014 31.6589V31.6871C14.6522 31.756 15.07 31.925 15.3548 32.1941C15.6427 32.4632 15.7866 32.8231 15.7866 33.2737C15.7866 33.6743 15.688 34.0326 15.4909 34.3487C15.2969 34.6648 14.9964 34.9136 14.5896 35.0951C14.1828 35.2766 13.6586 35.3673 13.0171 35.3673C12.6384 35.3673 12.2848 35.336 11.9562 35.2734C11.6307 35.214 11.324 35.1217 11.0361 34.9965V33.7619C11.3303 33.9121 11.6386 34.0264 11.9609 34.1046C12.2832 34.1797 12.5836 34.2173 12.8622 34.2173C13.3816 34.2173 13.7447 34.1281 13.9512 33.9497C14.1609 33.7682 14.2657 33.5147 14.2657 33.1892C14.2657 32.9983 14.2172 32.8372 14.1202 32.7057C14.0232 32.5743 13.8542 32.4742 13.6132 32.4053C13.3754 32.3365 13.0421 32.302 12.6134 32.302H12.0923V31.1895H12.6228C13.0452 31.1895 13.366 31.1504 13.5851 31.0722C13.8072 30.9908 13.9575 30.8813 14.0357 30.7436C14.1171 30.6028 14.1577 30.4432 14.1577 30.2648C14.1577 30.0207 14.0826 29.8298 13.9324 29.6921C13.7822 29.5544 13.5319 29.4856 13.1814 29.4856C12.9623 29.4856 12.762 29.5137 12.5805 29.5701C12.4021 29.6233 12.241 29.689 12.097 29.7672C11.9531 29.8423 11.8263 29.9159 11.7168 29.9878L11.0455 28.988C11.3147 28.794 11.6292 28.6328 11.9891 28.5045C12.3521 28.3762 12.7839 28.312 13.2846 28.312C13.9919 28.312 14.5521 28.4544 14.9651 28.7392C15.3782 29.024 15.5848 29.4261 15.5848 29.9456ZM21.3163 31.842C21.3163 32.3959 21.2725 32.8904 21.1849 33.3254C21.1004 33.7604 20.9627 34.1296 20.7718 34.4332C20.584 34.7367 20.3368 34.9683 20.0301 35.1279C19.7234 35.2875 19.351 35.3673 18.9129 35.3673C18.3621 35.3673 17.9099 35.2281 17.5563 34.9495C17.2027 34.6679 16.9414 34.2642 16.7724 33.7385C16.6034 33.2096 16.5189 32.5774 16.5189 31.842C16.5189 31.1003 16.5956 30.4666 16.7489 29.9409C16.9054 29.412 17.1589 29.0068 17.5094 28.7251C17.8599 28.4435 18.3277 28.3026 18.9129 28.3026C19.4606 28.3026 19.9112 28.4435 20.2648 28.7251C20.6216 29.0036 20.886 29.4073 21.0581 29.9362C21.2302 30.4619 21.3163 31.0972 21.3163 31.842ZM17.96 31.842C17.96 32.3646 17.9882 32.8012 18.0445 33.1517C18.104 33.4991 18.2025 33.7604 18.3402 33.9356C18.4779 34.1109 18.6688 34.1985 18.9129 34.1985C19.1539 34.1985 19.3432 34.1124 19.4809 33.9403C19.6217 33.7651 19.7219 33.5037 19.7813 33.1564C19.8408 32.8059 19.8705 32.3678 19.8705 31.842C19.8705 31.3194 19.8408 30.8829 19.7813 30.5324C19.7219 30.1819 19.6217 29.919 19.4809 29.7437C19.3432 29.5654 19.1539 29.4762 18.9129 29.4762C18.6688 29.4762 18.4779 29.5654 18.3402 29.7437C18.2025 29.919 18.104 30.1819 18.0445 30.5324C17.9882 30.8829 17.96 31.3194 17.96 31.842ZM23.9591 37.583C23.2268 37.583 22.6667 37.4546 22.2786 37.198C21.8937 36.9446 21.7012 36.5878 21.7012 36.1278C21.7012 35.8117 21.7998 35.5473 21.997 35.3345C22.1941 35.1217 22.4836 34.9699 22.8654 34.8791C22.7183 34.8165 22.59 34.7148 22.4805 34.574C22.3709 34.4301 22.3162 34.2783 22.3162 34.1187C22.3162 33.9184 22.3741 33.7525 22.4898 33.6211C22.6056 33.4865 22.7731 33.3551 22.9921 33.2268C22.7167 33.1079 22.4977 32.917 22.3349 32.6541C22.1753 32.3912 22.0955 32.0814 22.0955 31.7247C22.0955 31.3429 22.1785 31.019 22.3443 30.753C22.5133 30.4838 22.7574 30.2789 23.0766 30.138C23.3989 29.9972 23.7901 29.9268 24.2501 29.9268C24.3472 29.9268 24.4598 29.9331 24.5881 29.9456C24.7164 29.9581 24.8338 29.9722 24.9402 29.9878C25.0497 30.0035 25.1233 30.016 25.1608 30.0254H26.9915V30.753L26.17 30.9642C26.2452 31.08 26.3015 31.2036 26.339 31.3351C26.3766 31.4665 26.3954 31.6057 26.3954 31.7528C26.3954 32.3161 26.1982 32.7558 25.8039 33.0719C25.4127 33.3848 24.8682 33.5413 24.1703 33.5413C24.0045 33.5319 23.848 33.5194 23.7009 33.5037C23.629 33.5601 23.5742 33.6195 23.5366 33.6821C23.4991 33.7447 23.4803 33.8104 23.4803 33.8793C23.4803 33.9481 23.5085 34.006 23.5648 34.053C23.6243 34.0968 23.7119 34.1312 23.8277 34.1562C23.9466 34.1781 24.0937 34.1891 24.2689 34.1891H25.1608C25.7366 34.1891 26.1747 34.3127 26.4752 34.5599C26.7787 34.8072 26.9305 35.1702 26.9305 35.649C26.9305 36.2623 26.6739 36.738 26.1607 37.076C25.6506 37.414 24.9167 37.583 23.9591 37.583ZM24.0201 36.6488C24.3612 36.6488 24.6538 36.616 24.8979 36.5502C25.1452 36.4877 25.3345 36.3969 25.4659 36.278C25.5974 36.1622 25.6631 36.0229 25.6631 35.8602C25.6631 35.7288 25.624 35.6239 25.5457 35.5457C25.4706 35.4706 25.3548 35.4174 25.1984 35.3861C25.045 35.3548 24.8479 35.3392 24.6069 35.3392H23.8652C23.69 35.3392 23.5319 35.3673 23.3911 35.4236C23.2534 35.48 23.1439 35.5582 23.0625 35.6584C22.9812 35.7616 22.9405 35.8805 22.9405 36.0151C22.9405 36.2123 23.0344 36.3672 23.2221 36.4798C23.413 36.5925 23.679 36.6488 24.0201 36.6488ZM24.2501 32.6682C24.5193 32.6682 24.7164 32.5853 24.8416 32.4194C24.9668 32.2535 25.0294 32.0282 25.0294 31.7434C25.0294 31.4274 24.9637 31.1911 24.8322 31.0346C24.7039 30.875 24.5099 30.7952 24.2501 30.7952C23.9873 30.7952 23.7901 30.875 23.6587 31.0346C23.5272 31.1911 23.4615 31.4274 23.4615 31.7434C23.4615 32.0282 23.5257 32.2535 23.654 32.4194C23.7854 32.5853 23.9841 32.6682 24.2501 32.6682Z"
        fill="white"
      />
    </svg>
  );
}

function GyroSVG() {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.2969"
        cy="24.3672"
        r="22.9043"
        stroke="white"
        stroke-width="1.9493"
      />
      <path
        d="M27.7438 16.0082C30.1001 15.6155 31.8388 16.0974 32.7518 17.1351C33.2286 17.9998 33.3103 19.6881 32.5143 21.9055C31.72 24.1183 30.1102 26.6663 27.5407 29.0026C25.7667 30.6156 23.3421 31.9985 21.0473 32.6255C18.7037 33.2658 16.8106 33.0476 15.7266 31.9634C15.1075 31.3441 14.6746 29.8247 15.2474 27.5268C15.8024 25.3005 17.2713 22.5405 20.0779 19.7305C22.6383 17.6447 25.3921 16.4001 27.7438 16.0082Z"
        stroke="white"
        stroke-width="1.9493"
      />
      <path
        d="M14.0645 13.6445L19.425 19.4924"
        stroke="white"
        stroke-width="1.9493"
        stroke-linejoin="round"
      />
      <path
        d="M23.8105 24.3672L34.0444 34.601"
        stroke="white"
        stroke-width="1.9493"
        stroke-linejoin="round"
      />
    </svg>
  );
}
