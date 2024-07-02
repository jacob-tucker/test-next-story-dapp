export const collectRoyalty = `
import { Address } from 'viem';
import { useRoyalty } from "react-sdk57";

export default function CollectRoyalty() {
    const { collectRoyaltyTokens } = useRoyalty();

    const parentIpId: Address = ...
    const childIpId: Address = ...

    const response = await collectRoyaltyTokens({
        parentIpId,
        royaltyVaultIpId: childIpId,
        txOptions: { waitForTransaction: true },
    });
    console.log(\`Collected royalty token \${response.royaltyTokensCollected} at transaction hash \${response.txHash}\`);
}
`;
