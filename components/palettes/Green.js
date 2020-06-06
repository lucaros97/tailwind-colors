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
                    <h2 className="text-2xl font-medium">Green</h2>
                    <div className="md:-mx-2 md:mt-5 md:flex md:flex-wrap">
                        <div className="md:w-1/3 md:px-2">
                            {/* 100 */}
                            <CopyToClipboard text="#F0FFF4" onCopy={() => this.changeCopyState('#F0FFF4')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-green-100"></div> 
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#F0FFF4" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">100</div>
                                                <div className="mt-1 font-normal opacity-75">#F0FFF4</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#C6F6D5" onCopy={() => this.changeCopyState('#C6F6D5')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-green-200"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#C6F6D5" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">200</div>
                                                <div className="mt-1 font-normal opacity-75">#C6F6D5</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#9AE6B4" onCopy={() => this.changeCopyState('#9AE6B4')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-green-300"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#9AE6B4" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">300</div>
                                                <div className="mt-1 font-normal opacity-75">#9AE6B4</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                        </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#68D391" onCopy={() => this.changeCopyState('#68D391')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-green-400"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#68D391" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">400</div>
                                                <div className="mt-1 font-normal opacity-75">#68D391</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#48BB78" onCopy={() => this.changeCopyState('#48BB78')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-green-500"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#48BB78" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">500</div>
                                                <div className="mt-1 font-normal opacity-75">#48BB78</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#38A169" onCopy={() => this.changeCopyState('#38A169')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-green-600"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#38A169" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">600</div>
                                                <div className="mt-1 font-normal opacity-75">#38A169</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#2F855A" onCopy={() => this.changeCopyState('#2F855A')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-green-700"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#2F855A" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">700</div>
                                                <div className="mt-1 font-normal opacity-75">#2F855A</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#276749" onCopy={() => this.changeCopyState('#276749')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-green-800"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#276749" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">800</div>
                                                <div className="mt-1 font-normal opacity-75">#276749</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#22543D" onCopy={() => this.changeCopyState('#22543D')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-green-900"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#22543D" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">900</div>
                                                <div className="mt-1 font-normal opacity-75">#22543D</div>
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