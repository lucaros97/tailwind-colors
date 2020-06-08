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
                    <h2 className="text-2xl font-medium">Yellow</h2>
                    <div className="md:-mx-2 md:mt-5 md:flex md:flex-wrap">
                        <div className="md:w-1/3 md:px-2">
                            {/* 100 */}
                            <CopyToClipboard text="#FFFFF0" onCopy={() => this.changeCopyState('#FFFFF0')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-100"></div> 
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#FFFFF0" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">100</div>
                                                <div className="mt-1 font-normal opacity-75">#FFFFF0</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#FEFCBF" onCopy={() => this.changeCopyState('#FEFCBF')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-200"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#FEFCBF" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">200</div>
                                                <div className="mt-1 font-normal opacity-75">#FEFCBF</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#FAF089" onCopy={() => this.changeCopyState('#FAF089')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-300"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#FAF089" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">300</div>
                                                <div className="mt-1 font-normal opacity-75">#FAF089</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                        </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#F6E05E" onCopy={() => this.changeCopyState('#F6E05E')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-400"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#F6E05E" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">400</div>
                                                <div className="mt-1 font-normal opacity-75">#F6E05E</div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#ECC94B" onCopy={() => this.changeCopyState('#ECC94B')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-500"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#ECC94B" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">500</div>
                                                <div className="mt-1 font-normal opacity-75">#ECC94B</div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#D69E2E" onCopy={() => this.changeCopyState('#D69E2E')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-600"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#D69E2E" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">600</div>
                                                <div className="mt-1 font-normal opacity-75">#D69E2E</div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#B7791F" onCopy={() => this.changeCopyState('#B7791F')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-700"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#B7791F" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">700</div>
                                                <div className="mt-1 font-normal opacity-75">#B7791F</div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#975A16" onCopy={() => this.changeCopyState('#975A16')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-800"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#975A16" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">800</div>
                                                <div className="mt-1 font-normal opacity-75">#975A16</div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#744210" onCopy={() => this.changeCopyState('#744210')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-yellow-900"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#744210" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">900</div>
                                                <div className="mt-1 font-normal opacity-75">#744210</div>
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