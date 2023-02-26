import React from 'react'
// import styles from '../styles/mainNews.module.scsss'
// import styles from '../styles/header.module.scss'
import styles from '../styles/mainNews.module.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DateRangeIcon from '@mui/icons-material/DateRange';

const newsData = [
    { 
        img:"https://ronbpost.com/storage/media/CKiBtB4olzyTdeNnVKlxecvl1ok0LEKuqS0uOufN.jpg",
        title:"दाङको राप्ती गाउँपालि भित्र प्लास्टिकजन्य बस्तु र जंक फुड प्रयोगमा रोक ",
        tag:"Sports",
        date:"14 jun, 2022, 13:09",
        desc:"काठमाडौँ – दाङको राप्ती गाउँपालिका भित्र प्लास्टिकजन्य बस्तु र जंक फुड प्रयोगमा रोक लगाएको छ । गाउँपालिको असार १९ गते बसेको कार्यपालिका बैठकको निर्णय अनुसार राप्ती गाउँपालिका क्षेत्रभित्र रहेका सरकारी कार्यालय, स्वास्थ्य संस्था, विद्यालय ,बैङ्क तथा वित्तीय संस्था लगायत पालिकाभित्र कार्यक्रम सञ्चालन गर्ने सङ्घसंस्थाले सार्वजनिक कार्यक्रम सञ्चालन गर्दा त्यस्तो बस्तुको प्रयोग नगर्न अनुरोध गरेको छ । पालिकाको विज्ञप्तिमा भनिएको छ ‘ राप्ती गाउँपालिका क्षेत्रभित्र रहेका सरकारी कार्यालय, स्वास्थ्य संस्था, विद्यालय ,बैङ्क तथा वित्तीय संस्था लगायत यस पालिकाभित्र कार्यक्रम सञ्चालन गर्ने सङ्घसंस्थाले सार्वजनिक कार्यक्रम सञ्चालन गर्दा रबर जन्य प्लास्टिकका फूल , खादा आदि तथा कोल्ड ड्रिंक्स, जंक फुड प्रयोग नगर्न नगराउन तथा उक्त बस्तुहरूको सट्टामा स्थानीय उत्पादन प्रवर्द्धन गर्न प्राकृतिक तथा दुग्धजन्य पदार्थ प्रयोग गर्ने प्रबन्ध गर्नुहुन सम्बन्धित सबैमा अनुरोध छ।'"
     }
]

const MainNews = () => {
    return (
        <div className={styles.mainNewsContainer}>
            <div className={styles.recommendedNewsContainer}>
                { newsData.map((news,index)=>{
                    return (
                <div className={styles.recommendedNewsBox}>
                    <img className={styles.recommendedImage} src={news.img} alt="" />
                    <div className={styles.recommendedContent}>
                        <div className={styles.recommendedTitle}>{news.title}</div>
                        <div className={styles.dateContainer}>
                            <DateRangeIcon/>
                        <div className={styles.recommendedDate}>{news.date}</div>
                        </div>
                        <div className={styles.recommendedDesc}>{news.desc}</div>
                        <div className={styles.recommendbuttonContainer}>
                            Read more
                            <ArrowForwardIosIcon className={styles.arrowIcon}/>
                        </div>
                    </div>
                </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default MainNews
