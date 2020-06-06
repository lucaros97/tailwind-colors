import {CopyToClipboard} from 'react-copy-to-clipboard';


class Red extends React.Component {
    state = {
        value: '',
        copied: false,
    };

    changeCopyState(colorValue) {
        // this.state.copied = !this.state.copied;
        if(this.state.copied == false) {
            this.setState({copied: true});
            this.setState({value: colorValue});
            setTimeout(function(){
                this.setState({copied:false});
           }.bind(this),1000);  // wait 5 seconds, then reset to false
        }
    }

    render() {
        return (
            <div className="py-10 flex flex-row justify-center dark:bg-gray-900 transition duration-150">
                <div className="px-6 w-full max-w-screen-lg">
                    <h2 className="text-2xl font-medium">Indigo</h2>
                    <div className="md:-mx-2 md:mt-5 md:flex md:flex-wrap">
                        <div className="md:w-1/3 md:px-2">
                            {/* 100 */}
                            <CopyToClipboard text="#EBF4FF" onCopy={() => this.changeCopyState('#EBF4FF')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-100"></div> 
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#EBF4FF" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">100</div>
                                                <div className="mt-1 font-normal opacity-75">#EBF4FF</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#C3DAFE" onCopy={() => this.changeCopyState('#C3DAFE')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-200"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#C3DAFE" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">200</div>
                                                <div className="mt-1 font-normal opacity-75">#C3DAFE</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#A3BFFA" onCopy={() => this.changeCopyState('#A3BFFA')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-300"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#A3BFFA" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">300</div>
                                                <div className="mt-1 font-normal opacity-75">#A3BFFA</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                        </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#7F9CF5" onCopy={() => this.changeCopyState('#7F9CF5')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-400"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#7F9CF5" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">400</div>
                                                <div className="mt-1 font-normal opacity-75">#7F9CF5</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#667EEA" onCopy={() => this.changeCopyState('#667EEA')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-500"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#667EEA" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">500</div>
                                                <div className="mt-1 font-normal opacity-75">#667EEA</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#5A67D8" onCopy={() => this.changeCopyState('#5A67D8')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-600"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#5A67D8" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">600</div>
                                                <div className="mt-1 font-normal opacity-75">#5A67D8</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#4C51BF" onCopy={() => this.changeCopyState('#4C51BF')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-700"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#4C51BF" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">700</div>
                                                <div className="mt-1 font-normal opacity-75">#4C51BF</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#434190" onCopy={() => this.changeCopyState('#434190')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-800"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#434190" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">800</div>
                                                <div className="mt-1 font-normal opacity-75">#434190</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#3C366B" onCopy={() => this.changeCopyState('#3C366B')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-indigo-900"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#3C366B" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">900</div>
                                                <div className="mt-1 font-normal opacity-75">#3C366B</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Red