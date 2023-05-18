import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Drivers() {
    const router = useRouter();
    useEffect(() => {
        // on mount
    }, []);
    return (
        // <div className={styles.wrapper}>
        <>
            <Sidebar
                navItems={[
                    {
                        title: (
                            <>
                                CV RISK MANAGEMENT:
                                <br /> IS THERE A GAP?
                            </>
                        ),
                        link: '/wheres-the-gap',
                    },
                    {
                        title: 'DRIVERS OF RESIDUAL CV RISK',
                        link: '/wheres-the-gap/drivers-of-residual-cv-risk',
                    },
                    {
                        title: 'ELEVATED TGS AS A RISK MARKER',
                        link: '/wheres-the-gap/elevated-tgs-as-a-risk-marker',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>SEVERAL DRIVERS</span> CONTRIBUTE TO
                    RESIDUAL CV RISK
                    <span className='superscript'>
                        <sup>1</sup>
                    </span>
                </h1>
                <h2>
                    Key pathways modulating residual CV risk in secondary
                    prevention<sup>1</sup>
                </h2>
                <img
                    src='/images/drivers-1.png'
                    className={styles.driversImg1}
                    alt=''
                />
                <img
                    src='/images/drivers-2.png'
                    className={styles.driversImg2}
                    alt=''
                />
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() => router.push('/wheres-the-gap')}
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push(
                            '/wheres-the-gap/elevated-tgs-as-a-risk-marker'
                        )
                    }
                />
                {/* <ul className='footnotes'>
                    <li className='footnote'>
                        *Confidence intervals: Primary endpoint (5-point MACE) -
                        HR (95% CI): 0.75 (0.68-0.83); key secondary endpoint
                        (3-point MACE) - HR (95% CI): 0.74 (0.65-0.83).
                    </li>
                    <li className='footnote'>
                        5-point MACE was defined as nonfatal MI, nonfatal
                        stroke, CV death, coronary revascularisation, or
                        unstable angina requiring hospitalisation.
                    </li>
                    <li className='footnote'>
                        3-point MACE was defined as nonfatal MI, nonfatal
                        stroke, or CV death.
                    </li>
                </ul> */}
                <Footer imgSrc='reference-2.1.png' />
            </div>
        </>
    );
}
