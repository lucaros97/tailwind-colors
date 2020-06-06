import {CopyToClipboard} from 'react-copy-to-clipboard';


class Gray extends React.Component {
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
                    <h2 className="text-2xl font-medium">Gray</h2>
                    <div className="md:-mx-3 md:mt-5 md:flex md:flex-wrap">
                        <div className="md:w-1/3 md:px-2">
                            {/* 100 */}
                            <CopyToClipboard text="#F7FAFC" onCopy={() => this.changeCopyState('#F7FAFC')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-100"></div> 
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#F7FAFC" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">100</div>
                                                <div className="mt-1 font-normal opacity-75">#F7FAFC</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            {/* 200 */}
                            <CopyToClipboard text="#EDF2F7" onCopy={() => this.changeCopyState('#EDF2F7')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-200"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#EDF2F7" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">200</div>
                                                <div className="mt-1 font-normal opacity-75">#EDF2F7</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            {/* 300 */}
                            <CopyToClipboard text="#E2E8F0" onCopy={() => this.changeCopyState('#E2E8F0')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-300"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#E2E8F0" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">300</div>
                                                <div className="mt-1 font-normal opacity-75">#E2E8F0</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                        </div>
                            <div className="md:w-1/3 md:px-2">
                                {/* 400 */}
                                <CopyToClipboard text="#CBD5E0" onCopy={() => this.changeCopyState('#CBD5E0')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-400"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#CBD5E0" ? 
                                                <div className="text-base font-medium flex items-center">
                                                    <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="ml-1">Copied</span>
                                                </div> 
                                                : 
                                                <div>
                                                    <div className="font-semibold">400</div>
                                                    <div className="mt-1 font-normal opacity-75">#CBD5E0</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                {/* 500 */}
                                <CopyToClipboard text="#A0AEC0" onCopy={() => this.changeCopyState('#A0AEC0')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-500"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#A0AEC0" ? 
                                                <div className="text-base font-medium flex items-center">
                                                    <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="ml-1">Copied</span>
                                                </div> 
                                                : 
                                                <div>
                                                    <div className="font-semibold">500</div>
                                                    <div className="mt-1 font-normal opacity-75">#A0AEC0</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                {/* 600 */}
                                <CopyToClipboard text="#718096" onCopy={() => this.changeCopyState('#718096')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-600"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#718096" ? 
                                                <div className="text-base font-medium flex items-center">
                                                    <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="ml-1">Copied</span>
                                                </div> 
                                                : 
                                                <div>
                                                    <div className="font-semibold">600</div>
                                                    <div className="mt-1 font-normal opacity-75">#718096</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="md:w-1/3 md:px-2">
                                {/* 700 */}
                                <CopyToClipboard text="#4A5568" onCopy={() => this.changeCopyState('#4A5568')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-700"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#4A5568" ? 
                                                <div className="text-base font-medium flex items-center">
                                                    <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="ml-1">Copied</span>
                                                </div> 
                                                : 
                                                <div>
                                                    <div className="font-semibold">700</div>
                                                    <div className="mt-1 font-normal opacity-75">#4A5568</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                {/* 800 */}
                                <CopyToClipboard text="#2D3748" onCopy={() => this.changeCopyState('#2D3748')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-800"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#2D3748" ? 
                                                <div className="text-base font-medium flex items-center">
                                                    <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="ml-1">Copied</span>
                                                </div> 
                                                : 
                                                <div>
                                                    <div className="font-semibold">800</div>
                                                    <div className="mt-1 font-normal opacity-75">#2D3748</div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                {/* 900 */}
                                <CopyToClipboard text="#1A202C" onCopy={() => this.changeCopyState('#1A202C')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-gray-900"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#1A202C" ? 
                                                <div className="text-base font-medium flex items-center">
                                                    <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="ml-1">Copied</span>
                                                </div> 
                                                : 
                                                <div>
                                                    <div className="font-semibold">900</div>
                                                    <div className="mt-1 font-normal opacity-75">#1A202C</div>
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

export default Gray