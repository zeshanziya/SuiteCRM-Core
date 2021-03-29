<?php

namespace App\Data\Service;

use App\Engine\Service\AclManagerInterface;
use App\Process\Service\ActionDefinitionProvider;

class RecordActionDefinitionProvider extends ActionDefinitionProvider implements RecordActionDefinitionProviderInterface
{
    /**
     * @var array
     */
    private $recordViewActions;

    /**
     * BulkActionDefinitionProvider constructor.
     * @param array $recordViewActions
     * @param AclManagerInterface $aclManager
     */
    public function __construct(array $recordViewActions, AclManagerInterface $aclManager)
    {
        parent::__construct($aclManager);
        $this->recordViewActions = $recordViewActions;
    }

    /**
     * @inheritDoc
     */
    public function getActions(string $module): array
    {
        return $this->filterActions($module, $this->recordViewActions);
    }
}