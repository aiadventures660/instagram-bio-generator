
import React from 'react';
import { BioPreview } from "@/components/BioPreview";
import { SymbolPicker } from "@/components/SymbolPicker";
import { CopyBioButton } from "@/components/home/CopyBioButton";
import { BioInputSection } from "@/components/home/BioInputSection";
import { ProTipsCard } from "@/components/home/ProTipsCard";

interface RightColumnProps {
  bioText: string;
  setBioText: (text: string) => void;
  selectedFont: string;
  characterLimit: number;
  insertSymbol: (symbol: string) => void;
  copyToClipboard: () => void;
}

export const RightColumn: React.FC<RightColumnProps> = ({
  bioText,
  setBioText,
  selectedFont,
  characterLimit,
  insertSymbol,
  copyToClipboard
}) => {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Bio Preview */}
      <div id="preview">
        <BioPreview bioText={bioText} selectedFont={selectedFont} />
      </div>
      
      {/* Copy Button */}
      <CopyBioButton bioText={bioText} onCopy={copyToClipboard} />
      
      {/* Text Input */}
      <BioInputSection 
        bioText={bioText} 
        setBioText={setBioText} 
        characterLimit={characterLimit}
      />

      {/* Symbol Picker */}
      <div id="symbols">
        <SymbolPicker onSymbolSelect={insertSymbol} />
      </div>

      {/* Tips Card */}
      <ProTipsCard />
    </div>
  );
};
