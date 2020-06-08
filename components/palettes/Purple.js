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
                    <h2 className="text-2xl font-medium">Purple</h2>
                    <div className="md:-mx-2 md:mt-5 md:flex md:flex-wrap">
                        <div className="md:w-1/3 md:px-2">
                            {/* 100 */}
                            <CopyToClipboard text="#FAF5FF" onCopy={() => this.changeCopyState('#FAF5FF')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-100"></div> 
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#FAF5FF" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">100</div>
                                                <div className="mt-1 font-normal opacity-75">#FAF5FF</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#E9D8FD" onCopy={() => this.changeCopyState('#E9D8FD')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-200"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#E9D8FD" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">200</div>
                                                <div className="mt-1 font-normal opacity-75">#E9D8FD</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text="#D6BCFA" onCopy={() => this.changeCopyState('#D6BCFA')}>
                                <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-300"></div>
                                    <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                        { this.state.copied && this.state.value == "#D6BCFA" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">300</div>
                                                <div className="mt-1 font-normal opacity-75">#D6BCFA</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </CopyToClipboard>
                        </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#B794F4" onCopy={() => this.changeCopyState('#B794F4')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-400"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#B794F4" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">400</div>
                                                <div className="mt-1 font-normal opacity-75">#B794F4</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#9F7AEA" onCopy={() => this.changeCopyState('#9F7AEA')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-500"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#9F7AEA" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">500</div>
                                                <div className="mt-1 font-normal opacity-75">#9F7AEA</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#805AD5" onCopy={() => this.changeCopyState('#805AD5')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-600"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#805AD5" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">600</div>
                                                <div className="mt-1 font-normal opacity-75">#805AD5</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="md:w-1/3 md:px-2">
                                <CopyToClipboard text="#6B46C1" onCopy={() => this.changeCopyState('#6B46C1')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-700"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#6B46C1" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">700</div>
                                                <div className="mt-1 font-normal opacity-75">#6B46C1</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#553C9A" onCopy={() => this.changeCopyState('#553C9A')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-800"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#553C9A" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">800</div>
                                                <div className="mt-1 font-normal opacity-75">#553C9A</div>
                                            </div>
                                        }
                                        </div>
                                    </div>
                                </CopyToClipboard>
                                <CopyToClipboard text="#44337A" onCopy={() => this.changeCopyState('#44337A')}>
                                    <div className="flex items-center mt-5 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                        <div className="h-24 w-24 rounded-lg shadow-inner bg-purple-900"></div>
                                        <div className="ml-2 text-gray-800 text-xs leading-none pl-1">
                                            { this.state.copied && this.state.value == "#44337A" ? 
                                            <div className="text-base font-medium flex items-center">
                                                <svg fill="none" className="h-5 w-5 text-teal-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span className="ml-1">Copied</span>
                                            </div> 
                                            : 
                                            <div>
                                                <div className="font-semibold">900</div>
                                                <div className="mt-1 font-normal opacity-75">#44337A</div>
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