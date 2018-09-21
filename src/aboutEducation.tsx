import * as React from 'react';
import './style.css';

export class AboutEducation extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className='sectionHeading'>Kate's Education</div>
                <div className='subSectionHeading'>🎓 University of Waterloo 🎓</div>
                <div className='subSectionBody'>Attending from Sept 2015: expected to graduate in June of 2020
                    <br />3B Honours in Computer Engineering, Honours Bachelor of Applied Science (BASc)
                    <div className='subSectionBodyCategory'>Courses:
                        <div className='subSectionBodySubCategory'>Concurrent and Parallel Programming:
                            <div className='subSectionBodySubCategoryBody'>
                                studied deeper level of multi-treading, synchronization, and memory management.
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>Compilers:
                            <div className='subSectionBodySubCategoryBody'>
                                gained knowledge of programming paradigms, compilation, and interpretation.
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>Algorithms and Data Structures:
                            <div className='subSectionBodySubCategoryBody'>
                                learned about many kinds data structures, basic algorithms, and
                                optimization and program efficiency.
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>Digital Hardware Systems:
                            <div className='subSectionBodySubCategoryBody'>
                                worked on dataflow diagrams, timing and power analysis, and performance
                                optimization in hardware description language, VHDL.
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>Probability Theory and Statistics:
                            <div className='subSectionBodySubCategoryBody'>
                                explored many probability and statistics theories and functions.
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>Discrete Mathematics:
                            <div className='subSectionBodySubCategoryBody'>
                                learned probability algorithms, public-key cryptography, RSA, and graph theory
                            </div>
                        </div>
                    </div>
                    <div className='subSectionBodyCategory'>Extracurricular activities:
                        <div className='subSectionBodySubCategory'>
                            Association of Korean-Canadian Scientists and Engineers (AKCSE)
                            University of Waterloo Chapter
                            <div className='subSectionBodySubCategoryA'>From 2016 to Present</div>
                            <div className='subSectionBodySubCategoryBody'>
                                help all students at University of Waterloo
                                 who need help on their academics or co-ops
                                by holding seminars related to interview tips or co-ops
                                and connecting them with mentors
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>
                            Formula Motor Sports Student Design Team
                            <div className='subSectionBodySubCategoryA'>From 2015 to 2016</div>
                            <div className='subSectionBodySubCategoryBody'>
                                design, make, and assemble to make the fastest racing car</div>
                            <div className='subSectionBodySubCategoryBody'>
                                participated in the mechanical team, which deal with hardware of the car</div>
                            <div className='subSectionBodySubCategoryBody'>
                                Find a </div>
                        </div>
                    </div>
                </div>
                <div className='subSectionHeading'>🎒 St. Joseph's Morrow Park High School 🎒</div>
                <div className='subSectionBody'>
                    Graduated in June 2015
                    <div className='subSectionBodyCategory'>Extra-curricular activities:
                        <div className='subSectionBodySubCategory'>Computer Science Club Leader
                            <div className='subSectionBodySubCategoryBody'>
                                taught anyone who are interested in computer science and organized
                                 some competitions
                                <br />
                                particiated in some canada-wide competitions
                                 (held by Skills Canada or FIRST Canada)
                                 with club members
                            </div>
                        </div>
                        <div className='subSectionBodySubCategory'>Math Club Leader</div>
                            <div className='subSectionBodySubCategoryBody'>
                                solved many challenging questions together afternoon
                                <br />
                                participated in canada-wide competitions (held by University of Waterloo)
                            </div>
                        <div className='subSectionBodySubCategory'>Student Council
                            <div className='subSectionBodySubCategoryBody'>
                                organized many kinds of events to make great memories in every peer's mind
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
