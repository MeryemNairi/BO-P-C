import * as React from 'react';
import styles from './Footer.module.scss'; // Ensure this file is named correctly

const Footer: React.FC = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footer_container}>
                <div className={styles.Links}>
                    <div className={styles.links_container}>

                        <a href="https://www.cnexia.com/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.9167 29C34.0833 27.625 34.2083 26.25 34.2083 24.8333C34.2083 23.4167 34.0833 22.0417 33.9167 20.6667H40.9583C41.2917 22 41.5 23.3958 41.5 24.8333C41.5 26.2708 41.2917 27.6667 40.9583 29M30.2292 40.5833C31.4792 38.2708 32.4375 35.7708 33.1042 33.1667H39.25C37.2316 36.6422 34.0294 39.275 30.2292 40.5833ZM29.7083 29H19.9583C19.75 27.625 19.625 26.25 19.625 24.8333C19.625 23.4167 19.75 22.0208 19.9583 20.6667H29.7083C29.8958 22.0208 30.0417 23.4167 30.0417 24.8333C30.0417 26.25 29.8958 27.625 29.7083 29ZM24.8333 41.4167C23.1042 38.9167 21.7083 36.1458 20.8542 33.1667H28.8125C27.9583 36.1458 26.5625 38.9167 24.8333 41.4167ZM16.5 16.5H10.4167C12.4138 13.0147 15.6139 10.3776 19.4167 9.08333C18.1667 11.3958 17.2292 13.8958 16.5 16.5ZM10.4167 33.1667H16.5C17.2292 35.7708 18.1667 38.2708 19.4167 40.5833C15.6214 39.2756 12.4256 36.6421 10.4167 33.1667ZM8.70833 29C8.375 27.6667 8.16667 26.2708 8.16667 24.8333C8.16667 23.3958 8.375 22 8.70833 20.6667H15.75C15.5833 22.0417 15.4583 23.4167 15.4583 24.8333C15.4583 26.25 15.5833 27.625 15.75 29M24.8333 8.22917C26.5625 10.7292 27.9583 13.5208 28.8125 16.5H20.8542C21.7083 13.5208 23.1042 10.7292 24.8333 8.22917ZM39.25 16.5H33.1042C32.4511 13.92 31.4857 11.4294 30.2292 9.08333C34.0625 10.3958 37.25 13.0417 39.25 16.5ZM24.8333 4C13.3125 4 4 13.375 4 24.8333C4 30.3587 6.19493 35.6577 10.1019 39.5647C12.0365 41.4993 14.3331 43.0339 16.8608 44.0808C19.3884 45.1278 22.0975 45.6667 24.8333 45.6667C30.3587 45.6667 35.6577 43.4717 39.5647 39.5647C43.4717 35.6577 45.6667 30.3587 45.6667 24.8333C45.6667 22.0975 45.1278 19.3884 44.0808 16.8608C43.0339 14.3331 41.4993 12.0365 39.5647 10.1019C37.6302 8.16739 35.3335 6.63282 32.8059 5.58584C30.2783 4.53887 27.5692 4 24.8333 4Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.link_txt}>
                                <p>cnexia.com</p>
                            </div>
                        </div></a>

                        <a href="https://eprogram.store/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <img src="/sites/Cnet/Assets/Eprogramme.webp" alt="" />
                            </div>
                            <div className={styles.link_txt}>
                                <p>eProgram</p>
                            </div>
                        </div></a>


                        <a href="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/Assets/Forms/AllItems.aspx?id=%2Fsites%2FCnexiaForEveryone%2FAssets%2FCnexia%20Welcome%20Book%20VF%201504%2Epdf&parent=%2Fsites%2FCnexiaForEveryone%2FAssets&p=true&ga=1"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>

                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.6875 15.625H40.625V18.75H29.6875V15.625ZM29.6875 23.4375H40.625V26.5625H29.6875V23.4375ZM29.6875 31.25H40.625V34.375H29.6875V31.25ZM9.375 15.625H20.3125V18.75H9.375V15.625ZM9.375 23.4375H20.3125V26.5625H9.375V23.4375ZM9.375 31.25H20.3125V34.375H9.375V31.25Z" fill="white"/>
                                <path d="M43.75 7.8125H6.25C5.4212 7.8125 4.62634 8.14174 4.04029 8.72779C3.45424 9.31384 3.125 10.1087 3.125 10.9375V39.0625C3.125 39.8913 3.45424 40.6862 4.04029 41.2722C4.62634 41.8583 5.4212 42.1875 6.25 42.1875H43.75C44.5788 42.1875 45.3737 41.8583 45.9597 41.2722C46.5458 40.6862 46.875 39.8913 46.875 39.0625V10.9375C46.875 10.1087 46.5458 9.31384 45.9597 8.72779C45.3737 8.14174 44.5788 7.8125 43.75 7.8125ZM6.25 10.9375H23.4375V39.0625H6.25V10.9375ZM26.5625 39.0625V10.9375H43.75V39.0625H26.5625Z" fill="white"/>
                                </svg>


                            </div>
                            <div className={styles.link_txt}>
                                <p>Welcome Book</p>
                            </div>
                        </div></a>


                        <a href="https://cnexia.sharepoint.com/:p:/s/CnexiaForEveryone/EZmVNwFslJVAk3ti_0YTLHcB6e9haGesfR6phVK2_uZVyQ?e=7mwkwG"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.75 14.0625V34.375H40.625V14.0625H34.375C33.1318 14.0625 31.9395 13.5686 31.0604 12.6896C30.1814 11.8105 29.6875 10.6182 29.6875 9.375V3.125H12.5C11.6712 3.125 10.8763 3.45424 10.2903 4.04029C9.70424 4.62634 9.375 5.4212 9.375 6.25V34.375H6.25V6.25C6.25 4.5924 6.90848 3.00269 8.08058 1.83058C9.25268 0.65848 10.8424 0 12.5 0L29.6875 0L43.75 14.0625ZM4.6875 37.0313H9.6875C10.5917 37.0313 11.3542 37.2177 11.975 37.5906C12.6042 37.9552 13.0833 38.4521 13.4125 39.0812C13.7417 39.7104 13.9062 40.4156 13.9062 41.1969C13.9062 41.9781 13.7396 42.6833 13.4062 43.3125C13.075 43.9354 12.5917 44.4292 11.9562 44.7937C11.2546 45.172 10.4655 45.3585 9.66875 45.3344H7.15625V49.5281H4.6875V37.0313ZM11.125 42.3875C11.3105 42.0186 11.4018 41.6096 11.3906 41.1969C11.3906 40.4885 11.1979 39.9458 10.8125 39.5687C10.4271 39.1896 9.89271 39 9.20938 39H7.15V43.3937H9.2125C9.61708 43.4042 10.0182 43.3163 10.3813 43.1375C10.6993 42.9684 10.9586 42.7069 11.125 42.3875ZM15.1937 37.0313H20.1937C21.0979 37.0313 21.8604 37.2177 22.4812 37.5906C23.1104 37.9552 23.5896 38.4521 23.9187 39.0812C24.2479 39.7104 24.4125 40.4156 24.4125 41.1969C24.4125 41.9781 24.2458 42.6833 23.9125 43.3125C23.5833 43.9354 23.1 44.4292 22.4625 44.7937C21.7608 45.172 20.9718 45.3585 20.175 45.3344H17.6656V49.5281H15.1969L15.1937 37.0313ZM21.6312 42.3875C21.8167 42.0186 21.908 41.6096 21.8969 41.1969C21.8969 40.4885 21.7042 39.9458 21.3188 39.5687C20.9354 39.1896 20.401 39 19.7156 39H17.6563V43.3937H19.7187C20.1233 43.4042 20.5244 43.3163 20.8875 43.1375C21.2055 42.9684 21.4649 42.7069 21.6312 42.3875ZM30.5438 49.5281V39.1H34.0969V37.0313H24.5188V39.1H28.0625V49.5281H30.5438ZM42.4062 37.0313H45.1969L41.2156 43.3031L45.1344 49.5281H42.2969L39.6406 45.1063H39.5312L36.8656 49.5281H34.175L38.05 43.2281L34.2125 37.0313H37.1219L39.7219 41.5281H39.8313L42.4062 37.0313Z" fill="white"/>
                                </svg>


                            </div>
                            <div className={styles.link_txt}>
                                <p>Generic Slide</p>
                            </div>
                        </div></a>

                        <a href="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/Assets/Forms/AllItems.aspx?id=%2Fsites%2FCnexiaForEveryone%2FAssets%2FGuide%20%2D%20CLEARVIEW%20%2Epdf&parent=%2Fsites%2FCnexiaForEveryone%2FAssets&p=true&ga=1"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="143" height="29" viewBox="0 0 143 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2393_519)">
                                <path d="M14.1096 9.08486C13.8221 9.01313 13.5346 8.96532 13.1394 8.8936C12.5645 8.79796 11.9895 8.7621 11.4146 8.7621C7.42608 8.7621 4.9108 11.0214 4.9108 14.4282C4.9108 17.8351 7.19851 20.2019 10.8996 20.2019C11.6062 20.2019 12.3129 20.178 13.0196 20.0824C13.3789 20.0107 13.7263 19.9628 14.1335 19.8433C14.1335 20.6203 14.2653 22.9513 14.2892 23.7761C13.9419 23.8717 13.2352 24.0152 12.7561 24.0869C11.9895 24.1945 11.223 24.2543 10.4444 24.2423C4.45565 24.2423 0 20.429 0 14.4282C0 9.06095 3.94062 4.75757 11.2469 4.75757C11.8817 4.75757 12.289 4.75757 12.828 4.82929C13.3071 4.87711 13.7862 4.94883 14.2653 5.04446C14.2653 6.23984 14.1934 7.27983 14.1096 9.08486Z" fill="white"/>
                                <path d="M18.0977 13.0176V4.99658H22.6012V20.0345C22.6012 20.1301 22.6012 20.154 22.697 20.154H28.2187V23.9434H18.0977V13.0176Z" fill="white"/>
                                <path d="M31.2969 13.0176V4.99658H41.4059V8.76204H35.8004V12.4797H40.7472V16.2451H35.8004V20.154H42.0527L40.5915 23.9434H31.2969V13.0176Z" fill="white"/>
                                <path d="M64.0684 13.0177V5.0684C64.4876 5.0684 65.1703 4.97277 65.7931 4.94886C66.416 4.92495 67.5059 4.94886 68.1886 4.94886C69.4942 4.92495 70.7878 5.0684 72.0574 5.39115C74.4768 5.98884 76.1058 8.23616 75.9261 10.7106C75.974 12.3005 75.3273 13.8306 74.1654 14.9064C73.8181 15.2531 73.4108 15.5519 72.9677 15.779V15.8627C73.1354 16.1018 73.4468 16.6158 77.052 21.9113C77.5671 22.6644 78.3216 23.7522 78.4414 23.9435H73.351L68.8234 16.6636H68.3923V23.9435H64.0684V13.0177ZM71.5423 10.9975C71.6741 9.81407 70.8237 8.73822 69.6259 8.60673C69.4702 8.59478 69.3025 8.59478 69.1468 8.60673C68.8594 8.58282 68.5839 8.58282 68.2964 8.60673V13.448C68.512 13.46 68.7156 13.46 68.9312 13.448C69.5062 13.448 70.0571 13.2807 70.5362 12.9579C71.171 12.4798 71.5304 11.7147 71.5064 10.9138L71.5423 10.9975Z" fill="white"/>
                                <path d="M102.504 15.4442V23.9434H97.9766V4.99658H102.504V15.4442Z" fill="white"/>
                                <path d="M106.887 13.0176V4.99658H116.984V8.76204H111.402V12.4797H116.337V16.2451H111.402V20.154H117.14V23.9434H106.887V13.0176Z" fill="white"/>
                                <path d="M52.666 0C51.1688 3.7296 43.084 23.7403 43.084 23.9077H50.9293V20.0585H48.9769L52.6301 10.3281H52.702L56.3551 20.0585H54.4387V23.9435H62.272C62.2002 23.7403 54.1872 3.69373 52.666 0Z" fill="white"/>
                                <path d="M86.3111 28.9999L95.8931 5.09225H88.0718V8.97725H89.9882L86.3949 18.7196H86.3111L82.7178 8.97725H84.6342V5.04443H76.7051C76.765 5.24765 84.8019 25.2106 86.3111 28.9999Z" fill="white"/>
                                <path d="M138.628 4.99674C138.628 4.99674 138.257 6.19212 136.939 10.9737C136.628 12.169 136.46 12.8026 136.209 13.8665H136.137C135.706 12.8265 135.071 11.4757 134.628 10.6629C133.43 8.48725 132.029 6.06063 131.166 4.55444C130.364 5.94109 128.986 8.36772 127.872 10.5314C127.262 11.667 126.675 12.9221 126.231 13.9502H126.16C125.92 12.9819 125.657 11.9539 125.285 10.7226C123.968 6.2758 123.656 4.98478 123.656 4.98478H118.865C118.937 5.25972 119.237 6.2997 121.189 12.5874L125.022 25.0075C129.37 16.7474 130.591 14.249 131.01 13.0536C131.442 14.249 132.52 16.5441 136.939 25.0075L140.712 12.5157C142.617 6.25189 143 4.93697 143 4.93697L138.628 4.99674Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2393_519">
                                <rect width="143" height="29" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>Clearview</p>
                            </div>
                        </div></a>


                        <a href="https://hrportail-cnexia.hrmaps.cloud/app/home/v1"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2393_532)">
                                <path d="M20.8022 49.8956V36.7001H19.1562V48.2671C17.1242 48.5959 15.833 47.5102 15.833 45.5137C15.833 42.9116 15.8278 40.307 15.833 37.7049C15.8408 34.2155 18.3476 31.6892 21.8248 31.6709C23.9585 31.6604 26.0923 31.6578 28.2234 31.6709C31.5936 31.6918 34.1369 34.2494 34.1448 37.6214C34.1526 40.2939 34.15 42.9664 34.1448 45.6389C34.1448 47.518 32.6944 48.6664 30.7876 48.2462V36.7027H29.1912V49.9922C30.0833 49.9922 30.9311 50.0105 31.7815 49.9896C33.9804 49.9348 35.8247 48.1549 35.7907 45.9469C35.736 42.3192 36.1142 38.6732 35.4908 35.0428C35.5403 35.035 35.6238 35.0089 35.7073 35.0089C38.0654 35.0089 40.4261 34.9411 42.7816 35.0298C45.5701 35.1342 47.8447 37.1908 48.1942 39.9625C48.3794 41.4318 48.3038 42.9403 48.2829 44.4306C48.2699 45.378 47.8838 46.2157 47.2499 46.9282C46.6474 47.6042 45.9092 48.0452 44.9492 48.2488V39.1952H43.2954V48.3297H35.8455V49.9739C35.9629 49.9818 36.0464 49.9948 36.1325 49.9948C38.8557 49.9948 41.579 50.0157 44.3023 49.987C47.0595 49.9583 49.5167 47.8756 49.8454 45.1431C50.0358 43.551 50.0228 41.9173 49.9341 40.3122C49.7385 36.7314 46.9239 33.6961 43.3633 33.443C40.6035 33.2473 37.8202 33.396 35.0499 33.4065C34.7786 33.4065 34.583 33.4169 34.39 33.1533C32.8509 31.0393 30.7485 30.0162 28.1478 30.0032C26.0662 29.9927 23.9846 30.0032 21.903 30.0032C19.2606 30.0032 17.1373 31.0289 15.5565 33.1663C15.4574 33.2994 15.2278 33.4065 15.0583 33.4065C12.4237 33.3986 9.78646 33.2864 7.15447 33.3673C3.52603 33.4795 0.562757 36.2069 0.114093 39.8267C-0.0632861 41.2648 0.00975234 42.7368 0.0175779 44.1931C0.0358375 47.4137 2.58957 49.9713 5.80587 49.9948C8.44308 50.0131 11.0777 50 13.7149 49.9974C13.8479 49.9974 13.9836 49.9844 14.1296 49.9792V48.3271H6.66407V39.1952H5.01027V48.1992C3.49473 48.027 2.01048 46.649 1.79919 45.0204C1.62964 43.705 1.68442 42.3557 1.6792 41.0221C1.67138 37.5509 4.21207 35.0141 7.684 35.0037C9.7656 34.9985 11.8472 35.0037 13.9288 35.0037C14.1296 35.0037 14.3305 35.022 14.4974 35.0298C14.3827 35.8284 14.1949 36.5748 14.1844 37.3265C14.1479 40.1895 14.1505 43.0526 14.174 45.9156C14.1896 47.8521 15.5435 49.5616 17.4503 49.8669C18.5276 50.0392 19.6545 49.8983 20.8022 49.8983V49.8956Z" fill="white"/>
                                <path d="M16.391 9.22333C17.99 8.20809 19.6542 7.4982 21.4332 7.05452C21.5376 7.02842 21.6497 6.77527 21.6524 6.62389C21.6706 5.32157 21.6602 4.02185 21.6628 2.71952C21.6628 1.97571 21.9602 1.67557 22.7036 1.67296C24.2296 1.66774 25.7555 1.66774 27.2815 1.67296C28.0223 1.67557 28.3171 1.97571 28.3197 2.72213C28.3249 4.02446 28.3302 5.32679 28.3145 6.6265C28.3119 6.92403 28.398 7.04408 28.6953 7.11455C30.3439 7.50603 31.8829 8.16111 33.3255 9.05369C33.4089 9.10589 33.5054 9.1372 33.6228 9.1894C34.6506 8.15328 35.6601 7.1276 36.68 6.11236C37.1182 5.67651 37.5799 5.66085 38.0051 6.07843C39.1529 7.21112 40.2928 8.35424 41.4223 9.5052C41.824 9.91495 41.8162 10.3247 41.4405 10.7501C41.3153 10.8937 41.1745 11.0241 41.0388 11.1572C40.118 12.0707 39.1998 12.9842 38.2712 13.9028C39.2703 15.4792 39.985 17.1078 40.3893 18.8616C40.4624 19.1774 40.658 19.1643 40.8901 19.1643C42.1735 19.1617 43.4569 19.1591 44.7403 19.1643C45.5124 19.167 45.802 19.4619 45.802 20.2422C45.8046 21.6829 45.7811 23.1235 45.8124 24.5642C45.8255 25.2245 45.6976 25.7308 44.9986 25.8691V27.4638C46.355 27.4872 47.448 26.4094 47.4636 25.0183C47.4819 23.3871 47.474 21.756 47.4662 20.1248C47.461 18.5693 46.4072 17.5149 44.8525 17.4992C43.9499 17.4914 43.0474 17.4888 42.1475 17.5019C41.8657 17.5071 41.7301 17.4314 41.6231 17.1469C41.2866 16.2569 40.9162 15.38 40.5197 14.5162C40.3919 14.2369 40.4467 14.0907 40.6476 13.8976C41.3075 13.2582 41.9596 12.6083 42.5987 11.948C43.6552 10.8545 43.6656 9.40602 42.6092 8.32292C41.4953 7.1798 40.3658 6.05233 39.2259 4.9353C38.0964 3.82611 36.6018 3.84177 35.4723 4.95357C34.8306 5.58777 34.1889 6.22197 33.5628 6.87183C33.3724 7.07018 33.2263 7.0754 32.9811 6.96318C32.1125 6.57431 31.2386 6.20109 30.3491 5.86181C30.0726 5.75741 29.9761 5.63736 29.9813 5.34766C29.9996 4.44465 29.9918 3.54163 29.9866 2.64122C29.9761 1.08313 28.9327 0.0182983 27.3807 0.00785879C25.7842 -0.00258071 24.1878 -0.00519059 22.594 0.00785879C21.0654 0.0209082 20.0116 1.08052 19.9986 2.59947C19.9907 3.50248 19.9881 4.4055 20.0038 5.30591C20.009 5.60343 19.9386 5.7522 19.6281 5.86703C18.7543 6.19326 17.8935 6.55865 17.0457 6.95013C16.751 7.08584 16.5892 7.04669 16.3805 6.82485C15.7806 6.19848 15.1624 5.58777 14.5442 4.97967C13.3677 3.8235 11.8861 3.82089 10.7175 4.97967C9.62189 6.06538 8.52892 7.15892 7.44378 8.25768C6.31169 9.4008 6.30908 10.8493 7.43074 11.995C8.062 12.6397 8.69848 13.2817 9.348 13.9054C9.55407 14.1038 9.58798 14.25 9.46277 14.524C9.07149 15.3722 8.7063 16.2335 8.37502 17.1078C8.26285 17.4001 8.14286 17.5123 7.82723 17.5045C6.89078 17.4836 5.95432 17.481 5.01786 17.5045C3.651 17.5358 2.55542 18.5589 2.52934 19.8768C2.49543 21.6281 2.49543 23.3819 2.52934 25.1357C2.55542 26.4563 3.70317 27.5159 4.98917 27.4585V25.8665C4.32139 25.6342 4.18314 25.4489 4.18314 24.7651C4.18314 23.254 4.18053 21.7455 4.18314 20.2344C4.18314 19.4567 4.47268 19.167 5.25263 19.1643C6.53602 19.1591 7.81941 19.1539 9.1028 19.1696C9.42364 19.1748 9.54885 19.073 9.6245 18.7572C10.0184 17.1286 10.6627 15.5993 11.5522 14.1769C11.6044 14.0934 11.6357 13.9968 11.6852 13.8898C10.6783 12.885 9.68189 11.8932 8.69065 10.8989C8.11678 10.3221 8.11939 9.93844 8.70108 9.35643C9.7184 8.33597 10.7357 7.31812 11.7557 6.30027C12.4704 5.58516 12.8017 5.58777 13.5294 6.31854C14.4816 7.27636 15.4284 8.23941 16.3936 9.21811L16.391 9.22333Z" fill="white"/>
                                <path d="M14.9813 22.4763C15.1326 16.8024 19.4392 12.8537 24.3067 12.5327C26.6179 12.3813 28.7542 12.9424 30.648 14.2735C33.4783 16.2622 34.8738 19.0495 35.0095 22.4711H36.6711C36.4728 18.0995 34.6573 14.6545 30.8828 12.4779C26.6335 10.0272 22.3295 10.2229 18.2863 13.0024C15.0126 15.2495 13.4553 18.4962 13.3223 22.4789H14.9787L14.9813 22.4763Z" fill="white"/>
                                <path d="M28.2968 49.9765V48.3584H21.6973V49.9765H28.2968Z" fill="white"/>
                                <path d="M20.8022 49.8956C19.6545 49.8956 18.5276 50.0366 17.4503 49.8643C15.5435 49.559 14.1896 47.8495 14.174 45.913C14.1505 43.0499 14.1479 40.1869 14.1844 37.3239C14.1949 36.5748 14.3827 35.8258 14.4974 35.0272C14.3305 35.0193 14.1296 35.0011 13.9288 35.0011C11.8472 35.0011 9.76559 34.9959 7.684 35.0011C4.21207 35.0115 1.67138 37.5483 1.6792 41.0194C1.68181 42.3531 1.62964 43.6998 1.79919 45.0178C2.00787 46.6463 3.49473 48.0244 5.01027 48.1966V39.1925H6.66407V48.3245H14.1296V49.9765C13.9836 49.9844 13.8505 49.9948 13.7149 49.9948C11.0777 49.9948 8.44308 50.0105 5.80587 49.9922C2.58957 49.9687 0.0358375 47.411 0.0175779 44.1904C0.00975234 42.7341 -0.0632861 41.2622 0.114093 39.8241C0.562757 36.2042 3.52342 33.4769 7.15447 33.3647C9.78646 33.2838 12.4237 33.396 15.0583 33.4038C15.2278 33.4038 15.4574 33.2968 15.5565 33.1637C17.1373 31.0262 19.2632 29.9979 21.903 30.0006C23.9846 30.0006 26.0662 29.9927 28.1478 30.0006C30.7459 30.0136 32.8509 31.0367 34.39 33.1507C34.583 33.4143 34.7786 33.4038 35.0499 33.4038C37.8228 33.3934 40.6061 33.2446 43.3633 33.4404C46.9239 33.6909 49.7385 36.7262 49.9341 40.3096C50.0202 41.9146 50.0358 43.5484 49.8454 45.1404C49.5193 47.8704 47.0595 49.9531 44.3023 49.9844C41.579 50.0131 38.8557 49.9922 36.1325 49.9922C36.049 49.9922 35.9629 49.9818 35.8455 49.9713V48.3271H43.2954V39.1925H44.9492V48.2462C45.9092 48.0426 46.6474 47.6016 47.2499 46.9256C47.8838 46.2157 48.2699 45.3753 48.2829 44.4279C48.3038 42.9377 48.3794 41.4292 48.1942 39.9598C47.8447 37.1881 45.5701 35.1316 42.7816 35.0272C40.4261 34.9384 38.0654 35.0063 35.7073 35.0063C35.6238 35.0063 35.5403 35.0324 35.4908 35.0402C36.1168 38.6732 35.736 42.3166 35.7907 45.9443C35.8247 48.1496 33.9804 49.9296 31.7815 49.987C30.9337 50.0079 30.0833 49.9896 29.1912 49.9896V36.7001H30.7876V48.2436C32.6944 48.6638 34.1422 47.5154 34.1448 45.6363C34.1474 42.9638 34.1526 40.2913 34.1448 37.6188C34.1369 34.2468 31.5936 31.6891 28.2234 31.6683C26.0897 31.6552 23.9559 31.6578 21.8248 31.6683C18.3476 31.6865 15.8408 34.2155 15.833 37.7023C15.8278 40.3043 15.833 42.909 15.833 45.511C15.833 47.5076 17.1242 48.5933 19.1562 48.2645V36.6975H20.8022V49.893V49.8956Z" fill="white"/>
                                <path d="M16.3916 9.22321C15.4265 8.24712 14.4796 7.28407 13.5275 6.32364C12.7997 5.59027 12.471 5.59027 11.7537 6.30537C10.7338 7.32322 9.71645 8.34107 8.69913 9.36154C8.11743 9.94615 8.11482 10.3272 8.6887 10.904C9.67993 11.8983 10.6764 12.8901 11.6833 13.8949C11.6337 14.0019 11.6024 14.0985 11.5502 14.182C10.6607 15.6044 10.0164 17.1337 9.62254 18.7623C9.5469 19.0781 9.41908 19.1799 9.10084 19.1747C7.81745 19.1564 6.53406 19.1642 5.25067 19.1694C4.47073 19.1721 4.18118 19.4618 4.18118 20.2395C4.17858 21.7506 4.17858 23.2591 4.18118 24.7702C4.18118 25.454 4.31944 25.6367 4.98722 25.8716V27.4636C3.70122 27.5211 2.55347 26.4614 2.52739 25.1408C2.49348 23.3896 2.49348 21.6358 2.52739 19.8819C2.55347 18.564 3.64905 17.5409 5.01591 17.5096C5.95237 17.4887 6.88882 17.4913 7.82528 17.5096C8.14091 17.5174 8.2609 17.4052 8.37307 17.1129C8.70435 16.2412 9.06954 15.3773 9.46082 14.5291C9.58603 14.2551 9.55212 14.1089 9.34604 13.9105C8.69652 13.2842 8.06004 12.6448 7.42878 12.0001C6.30712 10.8544 6.30973 9.4059 7.44183 8.26278C8.52697 7.16402 9.61994 6.07309 10.7155 4.98477C11.8841 3.82599 13.3684 3.82599 14.5422 4.98477C15.1604 5.59288 15.7786 6.20359 16.3786 6.82996C16.5899 7.0518 16.7516 7.09094 17.0438 6.95523C17.8915 6.56375 18.7523 6.19576 19.6262 5.87213C19.9366 5.7573 20.007 5.60592 20.0018 5.31101C19.9862 4.40799 19.9914 3.50497 19.9966 2.60457C20.0096 1.08562 21.0635 0.0260102 22.5921 0.0129609C24.1885 -8.85164e-05 25.7849 -8.85164e-05 27.3787 0.0129609C28.9308 0.0234004 29.9768 1.08823 29.9846 2.64633C29.9898 3.54934 29.9976 4.45236 29.9794 5.35277C29.9742 5.64507 30.0707 5.76252 30.3472 5.86691C31.2367 6.2062 32.1105 6.57941 32.9792 6.96828C33.2244 7.07789 33.3705 7.07528 33.5609 6.87693C34.1869 6.22708 34.8286 5.59288 35.4703 4.95868C36.5998 3.84687 38.0945 3.83121 39.224 4.94041C40.3639 6.05743 41.4934 7.18751 42.6072 8.32802C43.6637 9.41112 43.6558 10.8596 42.5968 11.9531C41.9577 12.6134 41.3056 13.2633 40.6456 13.9027C40.4474 14.0959 40.39 14.2394 40.5178 14.5213C40.9143 15.3851 41.2847 16.2647 41.6212 17.152C41.7307 17.4365 41.8638 17.5122 42.1455 17.507C43.048 17.4913 43.9506 17.4939 44.8505 17.5043C46.4052 17.52 47.459 18.5744 47.4643 20.1299C47.4721 21.7611 47.4799 23.3922 47.4617 25.0234C47.446 26.4145 46.353 27.4923 44.9966 27.4689V25.8742C45.6957 25.7359 45.8261 25.227 45.8105 24.5693C45.7792 23.1286 45.8026 21.688 45.8 20.2473C45.8 19.467 45.5105 19.1721 44.7384 19.1694C43.455 19.1642 42.1716 19.1668 40.8882 19.1694C40.656 19.1694 40.4604 19.1825 40.3874 18.8667C39.983 17.1129 39.2683 15.4843 38.2692 13.9079C39.1953 12.9867 40.1161 12.0758 41.0369 11.1624C41.1725 11.0266 41.3134 10.8988 41.4386 10.7552C41.8142 10.3324 41.822 9.92005 41.4203 9.5103C40.2882 8.35934 39.1509 7.21622 38.0032 6.08353C37.578 5.66595 37.1189 5.68161 36.6781 6.11746C35.6581 7.1327 34.6486 8.15838 33.6209 9.1945C33.5035 9.14231 33.407 9.11099 33.3235 9.05879C31.8836 8.16882 30.342 7.51113 28.6934 7.11965C28.3986 7.04919 28.3099 6.92913 28.3125 6.63161C28.3282 5.32928 28.323 4.02695 28.3178 2.72723C28.3178 1.98081 28.0204 1.68067 27.2796 1.67806C25.7536 1.67284 24.2276 1.67284 22.7016 1.67806C21.9582 1.68067 21.6634 1.98081 21.6608 2.72462C21.6556 4.02695 21.6661 5.32928 21.6504 6.629C21.6504 6.77776 21.5382 7.03353 21.4313 7.05963C19.6523 7.5033 17.9881 8.21058 16.389 9.22843L16.3916 9.22321Z" fill="white"/>
                                <path d="M14.9806 22.4762H13.3242C13.4573 18.4962 15.0171 15.2495 18.2882 12.9998C22.3314 10.2229 26.6355 10.0271 30.8847 12.4752C34.6593 14.6518 36.4722 18.0968 36.673 22.4684H35.0114C34.8758 19.0468 33.4802 16.2595 30.65 14.2708C28.7562 12.9397 26.6198 12.3786 24.3087 12.53C19.4412 12.8484 15.1345 16.7971 14.9832 22.4736L14.9806 22.4762Z" fill="white"/>
                                <path d="M24.9745 29.1627C22.2199 29.1549 19.9896 26.913 20 24.1544C20.0079 21.4114 22.2747 19.1564 25.0136 19.1695C27.7578 19.1825 29.9985 21.4427 29.9906 24.1883C29.9802 26.9417 27.7369 29.1679 24.9771 29.1601L24.9745 29.1627ZM24.9849 27.4976C26.837 27.5002 28.3238 26.0152 28.3238 24.17C28.3238 22.3353 26.8057 20.8268 24.9771 20.8372C23.1642 20.8502 21.6747 22.3405 21.6669 24.1517C21.6564 25.9995 23.1407 27.4924 24.9875 27.495L24.9849 27.4976Z" fill="white"/>
                                <path d="M10.8124 32.4955C8.05778 32.4851 5.83272 30.238 5.84576 27.4793C5.8588 24.7364 8.13082 22.484 10.8672 22.5023C13.6139 22.5206 15.8494 24.7833 15.8364 27.5315C15.8233 30.285 13.5774 32.506 10.815 32.4955H10.8124ZM10.8072 30.8304C12.6618 30.8409 14.1591 29.3689 14.1669 27.5263C14.1747 25.689 12.6722 24.1752 10.8411 24.1726C9.03337 24.17 7.52564 25.6576 7.50738 27.4663C7.48912 29.3167 8.96293 30.8226 10.8045 30.833L10.8072 30.8304Z" fill="white"/>
                                <path d="M39.1242 32.4955C36.3696 32.4876 34.1419 30.2431 34.1524 27.4845C34.1628 24.7415 36.4296 22.4892 39.1686 22.5023C41.9153 22.5179 44.1534 24.7781 44.143 27.5237C44.1326 30.2771 41.8866 32.5007 39.1268 32.4929L39.1242 32.4955ZM39.1346 30.8304C40.9867 30.8356 42.4762 29.3532 42.4762 27.508C42.4762 25.6733 40.9632 24.1621 39.1346 24.17C37.3243 24.1778 35.8297 25.6706 35.8192 27.4819C35.8088 29.3297 37.2904 30.8251 39.1346 30.8304Z" fill="white"/>
                                <path d="M28.2968 49.9765H21.6973V48.3584H28.2968V49.9765Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2393_532">
                                <rect width="50" height="50" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>HRmaps</p>
                            </div>
                        </div></a>


                        <a href="https://cnexia.selfservice.vivantio.com/Account/LogIn"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                            <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2393_529)">
                                <path d="M43.1963 8.51212L27.0791 44.6577H23.1349L12.164 19.9892H17.3286L25.1446 38.4205L39.0292 5.1826C35.0609 2.66061 30.2519 1.18115 25.003 1.18115C10.9136 1.17513 0 11.8356 0 24.6535C0 33.5874 5.30312 41.5361 13.2879 45.5315L9.86802 53.7724L20.869 47.942C22.2098 48.1499 23.5868 48.2584 25 48.2584C39.0864 48.2584 50 37.4714 50 24.6535C50 18.4434 47.4388 12.7395 43.1963 8.5091V8.51212Z" fill="white"/>
                                <path d="M46.993 0H41.1927L39.0293 5.17958C40.5509 6.1468 41.949 7.26467 43.1995 8.51211L46.993 0Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2393_529">
                                <rect width="50" height="53.7755" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>Vivantio</p>
                            </div>
                        </div></a>


                        <a href="https://www.facebook.com/cnexia/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1673 28.1251H34.3757L36.459 19.7917H29.1673V15.6251C29.1673 13.4792 29.1673 11.4584 33.334 11.4584H36.459V4.45841C35.7798 4.36883 33.2152 4.16675 30.5069 4.16675C24.8507 4.16675 20.834 7.61883 20.834 13.9584V19.7917H14.584V28.1251H20.834V45.8334H29.1673V28.1251Z" fill="white"/>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>cnexia</p>
                            </div>
                        </div></a>


                        <a href="https://www.instagram.com/cnexiagroupe/?hl=en"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.20898 24.9999C5.20898 15.6708 5.20898 11.0041 8.1069 8.10617C11.0048 5.20825 15.6694 5.20825 25.0007 5.20825C34.3298 5.20825 38.9965 5.20825 41.8944 8.10617C44.7923 11.0041 44.7923 15.6687 44.7923 24.9999C44.7923 34.3291 44.7923 38.9958 41.8944 41.8937C38.9965 44.7916 34.3319 44.7916 25.0007 44.7916C15.6715 44.7916 11.0048 44.7916 8.1069 41.8937C5.20898 38.9958 5.20898 34.3312 5.20898 24.9999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.475 13.5415H36.4542M34.375 24.9998C34.375 27.4862 33.3873 29.8708 31.6291 31.629C29.871 33.3871 27.4864 34.3748 25 34.3748C22.5136 34.3748 20.129 33.3871 18.3709 31.629C16.6127 29.8708 15.625 27.4862 15.625 24.9998C15.625 22.5134 16.6127 20.1289 18.3709 18.3707C20.129 16.6126 22.5136 15.6248 25 15.6248C27.4864 15.6248 29.871 16.6126 31.6291 18.3707C33.3873 20.1289 34.375 22.5134 34.375 24.9998Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>cnexiagroup</p>
                            </div>
                        </div></a>


                        <a href="https://www.linkedin.com/company/cnexia/mycompany/"><div className={styles.link_holder}>
                            <div className={styles.link_icon}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4583 10.4166C14.4578 11.5216 14.0183 12.5812 13.2365 13.3622C12.4547 14.1432 11.3947 14.5817 10.2896 14.5811C9.18452 14.5806 8.12493 14.1411 7.34392 13.3593C6.5629 12.5775 6.12445 11.5175 6.125 10.4124C6.12555 9.30732 6.56507 8.24773 7.34686 7.46672C8.12865 6.68571 9.18868 6.24725 10.2938 6.2478C11.3988 6.24836 12.4584 6.68787 13.2394 7.46966C14.0204 8.25146 14.4589 9.31148 14.4583 10.4166ZM14.5833 17.6666H6.25V43.7499H14.5833V17.6666ZM27.75 17.6666H19.4583V43.7499H27.6667V30.0624C27.6667 22.4374 37.6042 21.7291 37.6042 30.0624V43.7499H45.8333V27.2291C45.8333 14.3749 31.125 14.8541 27.6667 21.1666L27.75 17.6666Z" fill="white"/>
                                </svg>

                            </div>
                            <div className={styles.link_txt}>
                                <p>cnexia</p>
                            </div>
                        </div></a>


                       

                       
                        

                    </div>
                </div>
                <div className={styles.buttom_part}>
                    <div className={styles.urls}>
                        <div className={styles.url}><a href="#">Home</a></div>
                        <div className={styles.url}><a href="#">Communication</a></div>
                        <div className={styles.url}><a href="#">Career</a></div>
                        <div className={styles.url}><a href="#">People&Culture</a></div>
                    </div>
                    <div className={styles.line}>

                    </div>
                    <div className={styles.cooperate}>
                         <p>© cnexia 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
