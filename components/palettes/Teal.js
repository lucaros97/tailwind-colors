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
                    <h2 className="text-2xl font-medium">Teal</h2>
                    <div className="md:-mx-2 md:mt-5 md:flex md:flex-wrap">
                        <div className="md:w-1/3 md:px-2">
                            {/* 100 */}
                            <CopyToClipboard text="#E6FFFA" onCopy={() => this.changeCopyState('#E6FFFA')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-100"></div> 
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#E6FFFA" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">100</div>
                                                <div className="mt-1 font-normal opacity-75">#E6FFFA</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#B2F5EA" onCopy={() => this.changeCopyState('#B2F5EA')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-200"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#B2F5EA" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">200</div>
                                                <div className="mt-1 font-normal opacity-75">#B2F5EA</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#81E6D9" onCopy={() => this.changeCopyState('#81E6D9')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-300"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#81E6D9" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">300</div>
                                                <div className="mt-1 font-normal opacity-75">#81E6D9</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                        </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#4FD1C5" onCopy={() => this.changeCopyState('#4FD1C5')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-400"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#4FD1C5" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">400</div>
                                                <div className="mt-1 font-normal opacity-75">#4FD1C5</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#38B2AC" onCopy={() => this.changeCopyState('#38B2AC')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-500"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#38B2AC" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">500</div>
                                                <div className="mt-1 font-normal opacity-75">#38B2AC</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#319795" onCopy={() => this.changeCopyState('#319795')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-600"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#319795" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">600</div>
                                                <div className="mt-1 font-normal opacity-75">#319795</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#2C7A7B" onCopy={() => this.changeCopyState('#2C7A7B')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-700"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#2C7A7B" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">700</div>
                                                <div className="mt-1 font-normal opacity-75">#2C7A7B</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#285E61" onCopy={() => this.changeCopyState('#285E61')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-800"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#285E61" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">800</div>
                                                <div className="mt-1 font-normal opacity-75">#285E61</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#234E52" onCopy={() => this.changeCopyState('#234E52')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-teal-900"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#234E52" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">900</div>
                                                <div className="mt-1 font-normal opacity-75">#234E52</div>
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